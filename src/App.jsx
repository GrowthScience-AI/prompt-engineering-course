import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  BookOpen, 
  Brain, 
  Code, 
  Lightbulb, 
  Target, 
  TrendingUp,
  Menu,
  X,
  ChevronRight,
  Play,
  CheckCircle,
  Trophy,
  Star,
  Clock,
  Users
} from 'lucide-react'
import tomsToolsLogo from './assets/tomstools-logo.webp'
import { courseData, badgeSystem } from './data/courseData.js'
import ModuleContent from './components/ModuleContent.jsx'
import './App.css'

const iconMap = {
  BookOpen,
  Brain,
  Target,
  Lightbulb,
  Code,
  TrendingUp
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentModule, setCurrentModule] = useState(courseData.userProgress.currentModule)
  const [progress, setProgress] = useState(courseData.userProgress.overallProgress)
  const [completedModules, setCompletedModules] = useState(new Set(courseData.userProgress.completedModules))
  const [userBadges, setUserBadges] = useState(courseData.userProgress.badges)
  const [showBadgeNotification, setShowBadgeNotification] = useState(false)

  const modules = courseData.modules
  const currentModuleData = modules.find(m => m.id === currentModule)

  // Calculate progress based on completed modules
  useEffect(() => {
    const newProgress = Math.round((completedModules.size / modules.length) * 100)
    setProgress(newProgress)
  }, [completedModules, modules.length])

  const handleModuleComplete = (moduleId) => {
    setCompletedModules(prev => new Set([...prev, moduleId]))
    
    // Award badges
    const newBadges = []
    if (moduleId === 1 && !userBadges.includes("First Steps")) {
      newBadges.push("First Steps")
    }
    if (completedModules.size + 1 === modules.length && !userBadges.includes("Prompt Master")) {
      newBadges.push("Prompt Master")
    }
    
    if (newBadges.length > 0) {
      setUserBadges(prev => [...prev, ...newBadges])
      setShowBadgeNotification(true)
      setTimeout(() => setShowBadgeNotification(false), 3000)
    }
    
    // Move to next module
    if (moduleId < modules.length) {
      setCurrentModule(moduleId + 1)
    }
  }

  const getModuleStatus = (module) => {
    if (completedModules.has(module.id)) return 'completed'
    if (module.id === currentModule) return 'current'
    if (module.id < currentModule) return 'available'
    return 'locked'
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Badge Notification */}
      {showBadgeNotification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2">
          <Card className="course-card bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-600" />
                <div>
                  <h4 className="font-semibold">New Badge Earned! 🎉</h4>
                  <p className="text-sm text-muted-foreground">Check your profile to see your achievements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-card border-border"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar Navigation */}
      <nav className={`sidebar-nav ${sidebarOpen ? 'open' : ''}`}>
        {/* Logo Header */}
        <div className="logo-container">
          <img src={tomsToolsLogo} alt="TomsTools" className="h-8 w-auto" />
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">TomsTools</h2>
            <p className="text-sm text-sidebar-foreground/70">Prompt Engineering Course</p>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-sidebar-foreground">Course Progress</span>
            <span className="text-sm text-sidebar-foreground/70">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 mb-3" />
          
          {/* User Stats */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="text-center p-2 rounded bg-sidebar-accent">
              <div className="font-semibold text-sidebar-accent-foreground">{completedModules.size}</div>
              <div className="text-sidebar-accent-foreground/70">Completed</div>
            </div>
            <div className="text-center p-2 rounded bg-sidebar-accent">
              <div className="font-semibold text-sidebar-accent-foreground">{userBadges.length}</div>
              <div className="text-sidebar-accent-foreground/70">Badges</div>
            </div>
          </div>
        </div>

        {/* Module Navigation */}
        <div className="p-4 space-y-2">
          {modules.map((module) => {
            const Icon = iconMap[module.icon]
            const status = getModuleStatus(module)
            
            return (
              <button
                key={module.id}
                onClick={() => status !== 'locked' && setCurrentModule(module.id)}
                disabled={status === 'locked'}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  status === 'current' 
                    ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                    : status === 'completed'
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground hover:bg-sidebar-accent/80'
                    : status === 'available'
                    ? 'hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground'
                    : 'opacity-50 cursor-not-allowed text-sidebar-foreground/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    {status === 'completed' ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : status === 'locked' ? (
                      <div className="h-5 w-5 rounded-full border-2 border-current opacity-50" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-sm leading-tight">{module.title}</h3>
                      {status === 'current' && (
                        <Badge variant="secondary" className="text-xs">Current</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs opacity-70">
                      <span>{module.lessons} lessons</span>
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {/* Badges Section */}
        <div className="p-4 border-t border-sidebar-border">
          <h3 className="text-sm font-medium text-sidebar-foreground mb-2">Your Badges</h3>
          <div className="flex flex-wrap gap-1">
            {userBadges.map((badgeName, index) => {
              const badge = badgeSystem.badges.find(b => b.name === badgeName)
              return (
                <div
                  key={index}
                  className="text-lg"
                  title={badge?.description || badgeName}
                >
                  {badge?.icon || '🏆'}
                </div>
              )
            })}
            {userBadges.length === 0 && (
              <p className="text-xs text-sidebar-foreground/50">Complete modules to earn badges!</p>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg course-gradient">
                {currentModuleData && React.createElement(iconMap[currentModuleData.icon], { className: "h-6 w-6 text-white" })}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {currentModuleData?.title}
                </h1>
                <p className="text-muted-foreground">
                  Module {currentModule} of {modules.length}
                </p>
              </div>
            </div>
            <p className="text-foreground/80 max-w-3xl">
              {currentModuleData?.description}
            </p>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6">
          <div className="max-w-6xl mx-auto">
            {currentModuleData && (
              <ModuleContent 
                module={currentModuleData} 
                onComplete={() => handleModuleComplete(currentModule)}
              />
            )}

            {/* Navigation Footer */}
            <div className="flex justify-between items-center pt-8 mt-8 border-t border-border">
              <Button 
                variant="outline" 
                disabled={currentModule === 1}
                onClick={() => setCurrentModule(Math.max(currentModule - 1, 1))}
              >
                Previous Module
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Progress</div>
                  <div className="text-lg font-semibold">{progress}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground">Module</div>
                  <div className="text-lg font-semibold">{currentModule} of {modules.length}</div>
                </div>
              </div>
              
              <Button 
                className="next-chapter-btn"
                disabled={currentModule === modules.length}
                onClick={() => setCurrentModule(Math.min(currentModule + 1, modules.length))}
              >
                Next Chapter
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App
