import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Lightbulb,
  Target,
  Star,
  RefreshCw,
  Send,
  Award,
  BookOpen
} from 'lucide-react'
import { practiceExercises, validateAnswer, calculateScore, generateFeedback } from '../data/practiceExercises'

const PracticeExercise = ({ moduleId, exerciseType, onComplete, onBack }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [userAnswers, setUserAnswers] = useState({})
  const [feedback, setFeedback] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [stepScores, setStepScores] = useState({})

  const exercise = practiceExercises[moduleId]?.[exerciseType]
  
  if (!exercise) {
    return (
      <Card className="course-card">
        <CardContent className="text-center py-8">
          <p>Practice exercise not found.</p>
          <Button onClick={onBack} className="mt-4">Back to Practice</Button>
        </CardContent>
      </Card>
    )
  }

  const currentStepData = exercise.steps[currentStep]
  const progress = ((currentStep + 1) / exercise.steps.length) * 100
  const currentAnswer = userAnswers[currentStep] || ''

  const evaluateAnswer = () => {
    const isValid = validateAnswer(moduleId, exerciseType, currentStep, currentAnswer)
    const feedbackText = generateFeedback(moduleId, exerciseType, currentStep, currentAnswer)
    
    // Calculate step score
    let stepScore = 0
    if (isValid) {
      stepScore = 100
    } else if (currentAnswer.length > 20) {
      stepScore = Math.min(60, currentAnswer.length / 2)
    }
    
    setStepScores(prev => ({ ...prev, [currentStep]: stepScore }))
    setFeedback(feedbackText)
  }

  const nextStep = () => {
    if (currentStep < exercise.steps.length - 1) {
      setCurrentStep(currentStep + 1)
      setFeedback('')
      setShowHint(false)
    } else {
      // Calculate final score
      const finalScore = calculateScore(moduleId, exerciseType, userAnswers)
      setIsComplete(true)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      setFeedback('')
      setShowHint(false)
    }
  }

  const updateAnswer = (value) => {
    setUserAnswers(prev => ({ ...prev, [currentStep]: value }))
  }

  const resetExercise = () => {
    setCurrentStep(0)
    setUserAnswers({})
    setFeedback('')
    setShowHint(false)
    setIsComplete(false)
    setStepScores({})
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300'
      case 'advanced': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300'
    }
  }

  if (isComplete) {
    const finalScore = calculateScore(moduleId, exerciseType, userAnswers)
    return (
      <Card className="course-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full course-gradient flex items-center justify-center mb-4">
            <Award className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Exercise Complete!</CardTitle>
          <CardDescription>
            You've completed the {exercise.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">{finalScore}%</div>
            <p className="text-lg text-muted-foreground">
              {finalScore >= 90 ? "Outstanding mastery! 🌟" : 
               finalScore >= 80 ? "Excellent work! 🎉" :
               finalScore >= 70 ? "Great job! 👍" : 
               finalScore >= 60 ? "Good effort! 💪" :
               "Keep practicing! 📚"}
            </p>
          </div>

          {/* Performance Breakdown */}
          <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Performance Summary</h4>
            <div className="space-y-3">
              {exercise.steps.map((step, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-slate-700 dark:text-slate-300">{step.title}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={stepScores[index] || 0} className="w-20 h-2" />
                    <span className="text-sm font-medium w-12 text-right">
                      {Math.round(stepScores[index] || 0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learning Points */}
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 text-left">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Key Learning Points
            </h4>
            <p className="text-sm text-slate-900 dark:text-blue-200 leading-relaxed mb-3">
              {exercise.description}
            </p>
            <ul className="text-sm space-y-1 text-slate-900 dark:text-blue-300">
              {exercise.steps.map((step, index) => (
                <li key={index}>• {step.title}: {step.instruction}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex gap-3 justify-center">
            <Button onClick={resetExercise} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button onClick={onComplete} className="course-gradient border-0 text-white">
              <CheckCircle className="w-4 h-4 mr-2" />
              Continue Learning
            </Button>
            <Button onClick={onBack} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Practice
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="course-card bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge className={getDifficultyColor(exercise.difficulty)}>
                  {exercise.difficulty}
                </Badge>
                <Badge variant="outline">{exerciseType === 'guided' ? 'Guided Practice' : 'Challenge'}</Badge>
              </div>
              <CardTitle className="text-xl">{exercise.title}</CardTitle>
              <CardDescription>{exercise.description}</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{Math.round(progress)}%</div>
              <div className="text-sm text-muted-foreground">Progress</div>
            </div>
          </div>
          <Progress value={progress} className="h-3 mt-4" />
        </CardHeader>
      </Card>

      {/* Current Step */}
      <Card className="course-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              {currentStepData.title}
            </CardTitle>
            <Badge variant="secondary">
              Step {currentStep + 1} of {exercise.steps.length}
            </Badge>
          </div>
          <CardDescription className="text-base leading-relaxed">
            {currentStepData.instruction}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Scenario */}
          <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-3 text-blue-900 dark:text-blue-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Scenario
            </h4>
            <p className="text-slate-900 dark:text-blue-200 leading-relaxed">
              {currentStepData.scenario}
            </p>
          </div>

          {/* Answer Input */}
          <div className="space-y-3">
            <label className="text-sm font-semibold text-slate-900 dark:text-slate-100">
              Your Response:
            </label>
            <Textarea
              value={currentAnswer}
              onChange={(e) => updateAnswer(e.target.value)}
              placeholder="Provide your detailed response here..."
              className="min-h-[150px] text-base leading-relaxed"
            />
            <div className="text-xs text-muted-foreground">
              {currentAnswer.length} characters • Aim for at least 100 characters for detailed feedback
            </div>
          </div>

          {/* Hint */}
          {showHint && (
            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Hint:</h4>
                  <p className="text-slate-900 dark:text-yellow-200 leading-relaxed">
                    {currentStepData.hint}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Feedback
              </h4>
              <p className="text-slate-900 dark:text-slate-200 leading-relaxed mb-4">
                {feedback}
              </p>
              {stepScores[currentStep] && (
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Step Score:</span>
                  <div className="flex items-center gap-2 flex-1">
                    <Progress value={stepScores[currentStep]} className="flex-1 h-2" />
                    <span className="text-lg font-bold text-primary min-w-[3rem]">
                      {Math.round(stepScores[currentStep])}%
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 flex-wrap">
            <Button 
              onClick={evaluateAnswer}
              disabled={currentAnswer.length < 10}
              className="course-gradient border-0 text-white"
            >
              <Send className="w-4 h-4 mr-2" />
              Get Feedback
            </Button>
            
            <Button 
              onClick={() => setShowHint(!showHint)}
              variant="outline"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>

            {feedback && stepScores[currentStep] >= 50 && (
              <Button 
                onClick={nextStep}
                className="course-gradient border-0 text-white"
              >
                {currentStep === exercise.steps.length - 1 ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Complete Exercise
                  </>
                ) : (
                  <>
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          onClick={currentStep === 0 ? onBack : prevStep}
          variant="outline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {currentStep === 0 ? 'Back to Practice' : 'Previous Step'}
        </Button>
        
        <div className="text-sm text-muted-foreground">
          Step {currentStep + 1} of {exercise.steps.length}
        </div>
        
        <Button 
          onClick={nextStep}
          disabled={!feedback}
          variant="outline"
        >
          {currentStep === exercise.steps.length - 1 ? 'Complete' : 'Skip Step'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

export default PracticeExercise
