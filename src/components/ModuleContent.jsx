import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  InteractiveTimeline, 
  PromptBuilder, 
  TechniqueComparison, 
  BeforeAfterGallery, 
  InteractiveQuiz,
  ResourceLibrary 
} from './InteractiveElements.jsx'
import { 
  Play, 
  Brain, 
  Target, 
  CheckCircle, 
  Clock,
  BookOpen,
  Lightbulb,
  Code,
  Users,
  Award
} from 'lucide-react'

const ModuleContent = ({ module, onComplete }) => {
  const [activeSection, setActiveSection] = useState('overview')
  const [completedSections, setCompletedSections] = useState(new Set())

  const markSectionComplete = (sectionId) => {
    setCompletedSections(prev => new Set([...prev, sectionId]))
  }

  const renderInteractiveElement = (element) => {
    switch (element.type) {
      case 'timeline':
        return <InteractiveTimeline data={element.data} />
      case 'promptBuilder':
        return <PromptBuilder components={element.components} />
      case 'techniqueComparison':
        return <TechniqueComparison techniques={element.techniques} />
      case 'beforeAfter':
        return <BeforeAfterGallery examples={element.examples} />
      case 'quiz':
        return <InteractiveQuiz questions={element.questions} />
      case 'resourceLibrary':
        return <ResourceLibrary categories={element.categories} />
      default:
        return (
          <Card className="course-card">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full course-gradient mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{element.title}</h3>
              <p className="text-muted-foreground mb-4">
                Interactive element: {element.type}
              </p>
              <Button className="course-gradient border-0 text-white">
                Launch Interactive Tool
              </Button>
            </CardContent>
          </Card>
        )
    }
  }

  const sections = [
    { id: 'overview', title: 'Overview', icon: BookOpen },
    { id: 'concepts', title: 'Key Concepts', icon: Brain },
    { id: 'interactive', title: 'Interactive Elements', icon: Play },
    { id: 'practice', title: 'Practice', icon: Target },
  ]

  const progressPercentage = (completedSections.size / sections.length) * 100

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <Card className="course-card bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Module {module.id}</Badge>
                <Badge variant="outline" className="gap-1">
                  <Clock className="w-3 h-3" />
                  {module.duration}
                </Badge>
              </div>
              <CardTitle className="text-2xl">{module.title}</CardTitle>
              <CardDescription className="text-base">
                {module.description}
              </CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-muted-foreground">Complete</div>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2 mt-4" />
        </CardHeader>
      </Card>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => {
          const Icon = section.icon
          const isCompleted = completedSections.has(section.id)
          const isActive = activeSection === section.id
          
          return (
            <Button
              key={section.id}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveSection(section.id)}
              className={`gap-2 ${isActive ? "course-gradient border-0 text-white" : ""}`}
            >
              {isCompleted ? (
                <CheckCircle className="w-4 h-4 text-green-600" />
              ) : (
                <Icon className="w-4 h-4" />
              )}
              {section.title}
            </Button>
          )
        })}
      </div>

      {/* Content Sections */}
      {activeSection === 'overview' && (
        <Card className="course-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Module Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              {module.content.overview}
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">What you'll learn:</h4>
              <ul className="space-y-2">
                {module.content.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button 
              onClick={() => markSectionComplete('overview')}
              className="course-gradient border-0 text-white"
            >
              Mark as Complete
            </Button>
          </CardContent>
        </Card>
      )}

      {activeSection === 'concepts' && (
        <div className="space-y-6">
          <Card className="course-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Key Concepts
              </CardTitle>
              <CardDescription>
                Master these fundamental concepts to excel in this module
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {module.content.keyPoints.map((concept, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                    <div className="w-6 h-6 rounded-full course-gradient flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{concept}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => markSectionComplete('concepts')}
                className="course-gradient border-0 text-white mt-4"
              >
                Mark as Complete
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {activeSection === 'interactive' && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Play className="w-5 h-5" />
            Interactive Elements
          </h3>
          {module.content.interactiveElements?.map((element, index) => (
            <Card key={index} className="course-card">
              <CardHeader>
                <CardTitle>{element.title}</CardTitle>
                {element.description && (
                  <CardDescription>{element.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                {renderInteractiveElement(element)}
              </CardContent>
            </Card>
          ))}
          <Button 
            onClick={() => markSectionComplete('interactive')}
            className="course-gradient border-0 text-white"
          >
            Complete Interactive Section
          </Button>
        </div>
      )}

      {activeSection === 'practice' && (
        <div className="space-y-6">
          <Card className="course-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Practice Exercises
              </CardTitle>
              <CardDescription>
                Apply what you've learned with hands-on exercises
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Users className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <h4 className="font-semibold mb-2">Guided Practice</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Step-by-step exercises with hints and feedback
                    </p>
                    <Button size="sm" className="course-gradient border-0 text-white">
                      Start Practice
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-dashed border-secondary/30 hover:border-secondary/60 transition-colors">
                  <CardContent className="p-6 text-center">
                    <Award className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <h4 className="font-semibold mb-2">Challenge Mode</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Test your skills with advanced scenarios
                    </p>
                    <Button size="sm" variant="outline">
                      Take Challenge
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Button 
                onClick={() => markSectionComplete('practice')}
                className="w-full course-gradient border-0 text-white"
              >
                Complete Practice Section
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Module Completion */}
      {completedSections.size === sections.length && (
        <Card className="course-card bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Module Complete! 🎉</h3>
            <p className="text-muted-foreground mb-4">
              Congratulations! You've successfully completed {module.title}.
            </p>
            <div className="flex gap-2 justify-center">
              <Button onClick={onComplete} className="course-gradient border-0 text-white">
                Continue to Next Module
              </Button>
              <Button variant="outline">
                Review Module
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ModuleContent
