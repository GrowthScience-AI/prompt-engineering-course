import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { 
  CheckCircle, 
  Play, 
  Clock, 
  Lightbulb, 
  Target, 
  Code,
  BookOpen,
  ArrowRight,
  Star,
  Trophy,
  Zap
} from 'lucide-react'

// Interactive Timeline Component
export const InteractiveTimeline = ({ data }) => {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
        {data.map((event, index) => (
          <div key={index} className="relative flex items-start gap-4 pb-8">
            <div 
              className={`relative z-10 w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                selectedEvent === index 
                  ? 'bg-primary border-primary scale-110' 
                  : 'bg-background border-primary/50 hover:border-primary'
              }`}
              onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
            >
              <div className="absolute inset-2 rounded-full bg-primary opacity-60"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="text-xs">{event.year}</Badge>
                <h3 className="font-semibold text-sm">{event.event}</h3>
              </div>
              {selectedEvent === index && (
                <p className="text-sm text-muted-foreground animate-in slide-in-from-top-2 duration-200">
                  {event.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Prompt Builder Component
export const PromptBuilder = ({ components }) => {
  const [promptParts, setPromptParts] = useState({
    instruction: '',
    context: '',
    inputData: '',
    outputIndicator: ''
  })
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  useEffect(() => {
    const parts = Object.values(promptParts).filter(part => part.trim())
    setGeneratedPrompt(parts.join('\n\n'))
  }, [promptParts])

  const updatePromptPart = (key, value) => {
    setPromptParts(prev => ({ ...prev, [key]: value }))
  }

  const useExample = (key, example) => {
    setPromptParts(prev => ({ ...prev, [key]: example }))
  }

  const testPrompt = () => {
    if (!generatedPrompt.trim()) {
      alert('Please build a prompt first by filling in the components above.')
      return
    }
    alert(`Testing your prompt:\n\n"${generatedPrompt}"\n\nIn a real implementation, this would send your prompt to an AI model and show the results. Your prompt looks well-structured!`)
  }

  const copyToClipboard = () => {
    if (!generatedPrompt.trim()) {
      alert('No prompt to copy. Please build a prompt first.')
      return
    }
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      alert('Prompt copied to clipboard!')
    }).catch(() => {
      alert('Failed to copy prompt. Please select and copy manually.')
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Build Your Prompt</h3>
          {Object.entries(components).map(([key, component]) => (
            <div key={key} className="space-y-2">
              <Label htmlFor={key} className="text-sm font-medium">
                {component.label}
              </Label>
              <Textarea
                id={key}
                placeholder={component.placeholder}
                value={promptParts[key]}
                onChange={(e) => updatePromptPart(key, e.target.value)}
                className="min-h-[80px]"
              />
              <div className="flex flex-wrap gap-1">
                {component.examples.map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs h-6"
                    onClick={() => useExample(key, example)}
                  >
                    {example.substring(0, 20)}...
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Generated Prompt</h3>
          <Card className="course-card">
            <CardContent className="p-4">
              <pre className="whitespace-pre-wrap text-sm text-foreground/80 min-h-[200px]">
                {generatedPrompt || "Start building your prompt by filling in the components on the left..."}
              </pre>
            </CardContent>
          </Card>
          <div className="flex gap-2">
            <Button 
              className="course-gradient border-0 text-white"
              onClick={testPrompt}
            >
              <Play className="w-4 h-4 mr-2" />
              Test Prompt
            </Button>
            <Button 
              variant="outline"
              onClick={copyToClipboard}
            >
              Copy to Clipboard
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Technique Comparison Component
export const TechniqueComparison = ({ techniques }) => {
  const [selectedTechnique, setSelectedTechnique] = useState(0)
  const [testInput, setTestInput] = useState("Explain quantum computing")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <div className="space-y-2">
          <Label htmlFor="test-input">Test Input</Label>
          <Input
            id="test-input"
            value={testInput}
            onChange={(e) => setTestInput(e.target.value)}
            placeholder="Enter a task to test with different techniques..."
          />
        </div>
        
        <Tabs value={selectedTechnique.toString()} onValueChange={(value) => setSelectedTechnique(parseInt(value))}>
          <TabsList className="grid w-full grid-cols-3">
            {techniques.map((technique, index) => (
              <TabsTrigger key={index} value={index.toString()}>
                {technique.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {techniques.map((technique, index) => (
            <TabsContent key={index} value={index.toString()} className="space-y-4">
              <Card className="course-card">
                <CardHeader>
                  <CardTitle className="text-lg">{technique.name}</CardTitle>
                  <CardDescription>{technique.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Example Prompt:</h4>
                    <div className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                      {technique.example}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2 text-green-600">Pros:</h4>
                      <ul className="text-sm space-y-1">
                        {technique.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2 text-orange-600">Considerations:</h4>
                      <ul className="text-sm space-y-1">
                        {technique.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-3 h-3 border border-orange-600 rounded-full mt-0.5 flex-shrink-0"></div>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full course-gradient border-0 text-white"
                    onClick={() => alert(`Testing "${technique.name}" with input: "${testInput}"\n\nExample prompt:\n${technique.example.replace('[INPUT]', testInput)}\n\nIn a full implementation, this would show actual AI responses using this technique.`)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try with "{testInput}"
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

// Before/After Gallery Component
export const BeforeAfterGallery = ({ examples }) => {
  const [selectedExample, setSelectedExample] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {examples.map((example, index) => (
          <Button
            key={index}
            variant={selectedExample === index ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedExample(index)}
            className={selectedExample === index ? "course-gradient border-0 text-white" : ""}
          >
            {example.category}
          </Button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="course-card">
          <CardHeader>
            <CardTitle className="text-lg text-red-600">❌ Before</CardTitle>
            <CardDescription>Basic, unclear prompt</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
              <code className="text-sm">{examples[selectedExample].before}</code>
            </div>
          </CardContent>
        </Card>
        
        <Card className="course-card">
          <CardHeader>
            <CardTitle className="text-lg text-green-600">✅ After</CardTitle>
            <CardDescription>Optimized, detailed prompt</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <code className="text-sm">{examples[selectedExample].after}</code>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="course-card bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <div>
              <h4 className="font-semibold">Improvement Result</h4>
              <p className="text-sm text-muted-foreground">{examples[selectedExample].improvement}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Interactive Quiz Component
export const InteractiveQuiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }))
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correct) {
        correct++
      }
    })
    setScore(correct)
    setShowResults(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowResults(false)
    setScore(0)
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100)
    return (
      <Card className="course-card">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full course-gradient flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-2xl">Quiz Complete!</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length} ({percentage}%)
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="space-y-2">
            <Progress value={percentage} className="h-3" />
            <p className="text-sm text-muted-foreground">
              {percentage >= 80 ? "Excellent work! 🎉" : 
               percentage >= 60 ? "Good job! Keep learning 📚" : 
               "Keep practicing! You've got this 💪"}
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <Button onClick={resetQuiz} variant="outline">
              Retake Quiz
            </Button>
            <Button className="course-gradient border-0 text-white">
              Continue Learning
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">
          Question {currentQuestion + 1} of {questions.length}
        </h3>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-32 h-2" />
      </div>
      
      <Card className="course-card">
        <CardHeader>
          <CardTitle className="text-lg">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
              className={`w-full p-3 text-left rounded-lg border transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'border-primary bg-primary/10'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-4 h-4 rounded-full border-2 ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-primary bg-primary'
                    : 'border-muted-foreground'
                }`}>
                  {selectedAnswers[currentQuestion] === index && (
                    <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>
                  )}
                </div>
                <span>{option}</span>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </Button>
        
        {currentQuestion === questions.length - 1 ? (
          <Button 
            onClick={calculateScore}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="course-gradient border-0 text-white"
          >
            Finish Quiz
          </Button>
        ) : (
          <Button 
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={selectedAnswers[currentQuestion] === undefined}
            className="course-gradient border-0 text-white"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  )
}

// Resource Library Component
export const ResourceLibrary = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === index ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(index)}
            className={selectedCategory === index ? "course-gradient border-0 text-white" : ""}
          >
            {category.name}
          </Button>
        ))}
      </div>
      
      <div className="grid gap-4">
        {categories[selectedCategory].resources.map((resource, index) => (
          <Card key={index} className="course-card">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg course-gradient">
                    {resource.type === 'paper' && <BookOpen className="w-4 h-4 text-white" />}
                    {resource.type === 'tool' && <Code className="w-4 h-4 text-white" />}
                    {resource.type === 'guide' && <Lightbulb className="w-4 h-4 text-white" />}
                  </div>
                  <div>
                    <h4 className="font-medium">{resource.title}</h4>
                    <p className="text-sm text-muted-foreground capitalize">{resource.type}</p>
                  </div>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => alert(`Opening ${resource.title}\n\nType: ${resource.type}\n\nIn a full implementation, this would open the actual resource, paper, or tool.`)}
                >
                  View
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
