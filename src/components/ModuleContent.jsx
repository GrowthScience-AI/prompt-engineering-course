import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { InteractiveTimeline, PromptBuilder, TechniqueComparison, BeforeAfterGallery, InteractiveQuiz, ResourceLibrary } from './InteractiveElements'
import { ChainOfThoughtBuilder, MultiPersonaLab, WorkflowBuilder } from './AdvancedInteractiveElements'
import PracticeExercise from './PracticeExercise.jsx'
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
  Award,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const ModuleContent = ({ module, onComplete }) => {
  const [activeView, setActiveView] = useState('lesson')
  const [completedSections, setCompletedSections] = useState(new Set())
  const [expandedSections, setExpandedSections] = useState(new Set(['overview', 'concepts', 'interactive']))
  const [currentExercise, setCurrentExercise] = useState(null)

  const markSectionComplete = (sectionId) => {
    setCompletedSections(prev => new Set([...prev, sectionId]))
  }

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId)
      } else {
        newSet.add(sectionId)
      }
      return newSet
    })
  }

  const startPracticeExercise = (exerciseType) => {
    setCurrentExercise({ moduleId: module.id, exerciseType })
    setActiveView('exercise')
  }

  const completePracticeExercise = () => {
    setCurrentExercise(null)
    setActiveView('practice')
    markSectionComplete('practice')
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
      case 'chainOfThought':
        return <ChainOfThoughtBuilder examples={element.examples} />
      case 'roleBasedPrompting':
        return <MultiPersonaLab personas={element.personas} />
      case 'workflowDesigner':
        return <WorkflowBuilder templates={element.templates} />
      case 'diagramInteractive':
        return (
          <Card className="course-card">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">{element.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {element.components?.map((component, idx) => (
                    <div key={idx} className="p-4 rounded-lg border-2 border-dashed" style={{borderColor: component.color}}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-4 h-4 rounded-full" style={{backgroundColor: component.color}}></div>
                        <h4 className="font-semibold text-sm">{component.label}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">{component.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-muted/20 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    This diagram shows how the four key components work together to create effective prompts. 
                    Each component has a specific role and connects to the others to guide AI model behavior.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      default:
        return (
          <Card className="course-card">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full course-gradient mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{element.title}</h3>
              <p className="text-muted-foreground mb-4">
                {element.description || `Interactive ${element.type} tool`}
              </p>
              <div className="text-sm text-muted-foreground">
                This interactive element is available in the full course implementation.
              </div>
            </CardContent>
          </Card>
        )
    }
  }

  const progressPercentage = activeView === 'lesson' 
    ? (completedSections.size / 3) * 100 
    : activeView === 'practice' 
    ? completedSections.has('practice') ? 100 : 0
    : 100

  if (activeView === 'exercise') {
    return (
      <PracticeExercise 
        moduleId={currentExercise.moduleId}
        exerciseType={currentExercise.exerciseType}
        onComplete={completePracticeExercise}
        onBack={() => setActiveView('practice')}
      />
    )
  }

  if (activeView === 'practice') {
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
                <CardTitle className="text-2xl">{module.title} - Practice</CardTitle>
                <CardDescription className="text-base">
                  Apply what you've learned with hands-on exercises and challenges
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

        {/* Navigation */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setActiveView('lesson')}
          >
            Back to Lesson
          </Button>
        </div>

        {/* Practice Content */}
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
                    <Button 
                      className="course-gradient border-0 text-white"
                      onClick={() => startPracticeExercise('guided')}
                    >
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
                    <Button 
                      variant="outline"
                      onClick={() => startPracticeExercise('challenge')}
                    >
                      Take Challenge
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              {/* Practice Scenarios */}
              <div className="space-y-4 mt-6">
                <h4 className="font-semibold">Practice Scenarios</h4>
                <div className="grid gap-3">
                  <Card className="course-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg course-gradient">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-medium">Guided Practice Exercise</h5>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="text-xs">Beginner</Badge>
                              <span>15-20 min</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => startPracticeExercise('guided')}
                        >
                          Start
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="course-card hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                            <Award className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h5 className="font-medium">Challenge Exercise</h5>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="text-xs">Advanced</Badge>
                              <span>25-30 min</span>
                            </div>
                          </div>
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => startPracticeExercise('challenge')}
                        >
                          Start
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
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

        {completedSections.has('practice') && (
          <Card className="course-card bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Practice Complete! 🎉</h3>
              <p className="text-muted-foreground mb-4">
                Great job! You've completed all practice exercises for {module.title}.
              </p>
              <div className="flex gap-2 justify-center">
                <Button onClick={onComplete} className="course-gradient border-0 text-white">
                  Continue to Next Module
                </Button>
                <Button variant="outline" onClick={() => setActiveView('lesson')}>
                  Review Lesson
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    )
  }

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

      {/* Navigation */}
      <div className="flex gap-2">
        <Button
          variant={activeView === 'lesson' ? "default" : "outline"}
          onClick={() => setActiveView('lesson')}
          className={activeView === 'lesson' ? "course-gradient border-0 text-white" : ""}
        >
          <BookOpen className="w-4 h-4 mr-2" />
          Lesson Content
        </Button>
        <Button
          variant={activeView === 'practice' ? "default" : "outline"}
          onClick={() => setActiveView('practice')}
          className={activeView === 'practice' ? "course-gradient border-0 text-white" : ""}
        >
          <Target className="w-4 h-4 mr-2" />
          Practice
        </Button>
      </div>

      {/* Lesson Content */}
      <div className="space-y-8">
        {/* Overview Section */}
        <Card className="course-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Module Overview
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleSection('overview')}
              >
                {expandedSections.has('overview') ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
          </CardHeader>
          {expandedSections.has('overview') && (
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
                disabled={completedSections.has('overview')}
              >
                {completedSections.has('overview') ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </>
                ) : (
                  'Mark Overview Complete'
                )}
              </Button>
            </CardContent>
          )}
        </Card>

        {/* Key Concepts Section */}
        <Card className="course-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                Key Concepts
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleSection('concepts')}
              >
                {expandedSections.has('concepts') ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
            <CardDescription>
              Master these fundamental concepts to excel in this module
            </CardDescription>
          </CardHeader>
          {expandedSections.has('concepts') && (
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
                disabled={completedSections.has('concepts')}
              >
                {completedSections.has('concepts') ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </>
                ) : (
                  'Mark Concepts Complete'
                )}
              </Button>
            </CardContent>
          )}
        </Card>

        {/* Interactive Elements Section */}
        <Card className="course-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Interactive Learning Tools
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleSection('interactive')}
              >
                {expandedSections.has('interactive') ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>
            <CardDescription>
              Hands-on tools and demonstrations to reinforce your learning
            </CardDescription>
          </CardHeader>
          {expandedSections.has('interactive') && (
            <CardContent className="space-y-6">
              {module.content.interactiveElements?.map((element, index) => (
                <div key={index} className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-lg">{element.title}</h4>
                    {element.description && (
                      <p className="text-muted-foreground text-sm mt-1">{element.description}</p>
                    )}
                  </div>
                  {renderInteractiveElement(element)}
                </div>
              ))}
              <Button 
                onClick={() => markSectionComplete('interactive')}
                className="course-gradient border-0 text-white"
                disabled={completedSections.has('interactive')}
              >
                {completedSections.has('interactive') ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Completed
                  </>
                ) : (
                  'Complete Interactive Section'
                )}
              </Button>
            </CardContent>
          )}
        </Card>
      </div>

      {/* Module Completion */}
      {completedSections.size === 3 && (
        <Card className="course-card bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center">
              <CheckCircle className="w-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lesson Complete! 🎉</h3>
            <p className="text-muted-foreground mb-4">
              Excellent work! You've completed all the lesson content for {module.title}.
            </p>
            <div className="flex gap-2 justify-center">
              <Button 
                onClick={() => setActiveView('practice')}
                className="course-gradient border-0 text-white"
              >
                Continue to Practice
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline">
                Review Lesson
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default ModuleContent
