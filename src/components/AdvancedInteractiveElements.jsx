import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
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
  Zap,
  Brain,
  Users,
  Workflow,
  Copy,
  Plus,
  Minus
} from 'lucide-react'

// Chain-of-Thought Reasoning Builder
export const ChainOfThoughtBuilder = ({ examples }) => {
  const [selectedExample, setSelectedExample] = useState(0)
  const [customProblem, setCustomProblem] = useState('')
  const [reasoningSteps, setReasoningSteps] = useState([''])
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  const addStep = () => {
    setReasoningSteps([...reasoningSteps, ''])
  }

  const removeStep = (index) => {
    if (reasoningSteps.length > 1) {
      setReasoningSteps(reasoningSteps.filter((_, i) => i !== index))
    }
  }

  const updateStep = (index, value) => {
    const newSteps = [...reasoningSteps]
    newSteps[index] = value
    setReasoningSteps(newSteps)
  }

  const generatePrompt = () => {
    if (!customProblem.trim()) {
      alert('Please enter a problem to analyze first.')
      return
    }
    
    const validSteps = reasoningSteps.filter(step => step.trim())
    if (validSteps.length === 0) {
      alert('Please add at least one reasoning step.')
      return
    }

    const prompt = `Let's think through this step by step:

Problem: ${customProblem}

Please analyze this by following these reasoning steps:
${validSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

For each step, provide your analysis and reasoning before moving to the next step. Finally, synthesize your findings into a comprehensive conclusion.`

    setGeneratedPrompt(prompt)
  }

  const useExample = (exampleIndex) => {
    const example = examples[exampleIndex]
    setCustomProblem(example.problem)
    setReasoningSteps([...example.steps])
    setSelectedExample(exampleIndex)
  }

  const copyPrompt = () => {
    if (!generatedPrompt) {
      alert('Generate a prompt first!')
      return
    }
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      alert('Chain-of-thought prompt copied to clipboard!')
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="course-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Build Your Chain-of-Thought Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="problem">Problem to Analyze</Label>
              <Textarea
                id="problem"
                placeholder="Enter the complex problem you want to analyze..."
                value={customProblem}
                onChange={(e) => setCustomProblem(e.target.value)}
                className="mt-1"
                rows={3}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Reasoning Steps</Label>
                <Button size="sm" variant="outline" onClick={addStep}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Step
                </Button>
              </div>
              {reasoningSteps.map((step, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <div className="flex-1">
                    <Input
                      placeholder={`Step ${index + 1}: What should be analyzed?`}
                      value={step}
                      onChange={(e) => updateStep(index, e.target.value)}
                    />
                  </div>
                  {reasoningSteps.length > 1 && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => removeStep(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button onClick={generatePrompt} className="course-gradient border-0 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Generate Prompt
              </Button>
              {generatedPrompt && (
                <Button variant="outline" onClick={copyPrompt}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="course-card">
          <CardHeader>
            <CardTitle>Example Templates</CardTitle>
            <CardDescription>Use these proven chain-of-thought patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {examples.map((example, index) => (
              <Card key={index} className={`cursor-pointer transition-all ${selectedExample === index ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">{example.problem}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {example.steps.length} reasoning steps
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => useExample(index)}
                    >
                      Use Template
                    </Button>
                  </div>
                  {selectedExample === index && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-green-600 dark:text-green-400">
                        <Trophy className="w-3 h-3 inline mr-1" />
                        {example.reasoning}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {generatedPrompt && (
        <Card className="course-card">
          <CardHeader>
            <CardTitle>Generated Chain-of-Thought Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <pre className="text-sm text-slate-900 dark:text-slate-100 whitespace-pre-wrap font-mono">
                {generatedPrompt}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// Multi-Persona Analysis Lab
export const MultiPersonaLab = ({ personas }) => {
  const [scenario, setScenario] = useState('')
  const [selectedPersonas, setSelectedPersonas] = useState([])
  const [analysis, setAnalysis] = useState({})
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const togglePersona = (personaIndex) => {
    setSelectedPersonas(prev => 
      prev.includes(personaIndex) 
        ? prev.filter(i => i !== personaIndex)
        : [...prev, personaIndex]
    )
  }

  const runAnalysis = () => {
    if (!scenario.trim()) {
      alert('Please enter a scenario to analyze.')
      return
    }
    if (selectedPersonas.length === 0) {
      alert('Please select at least one persona for the analysis.')
      return
    }

    setIsAnalyzing(true)
    
    // Simulate analysis for each persona
    const newAnalysis = {}
    selectedPersonas.forEach(personaIndex => {
      const persona = personas[personaIndex]
      newAnalysis[personaIndex] = {
        prompt: `You are a ${persona.role} with expertise in ${persona.expertise}. 

Analyze the following scenario from your perspective, focusing on ${persona.perspective}:

Scenario: ${scenario}

Please provide:
1. Your initial assessment from a ${persona.role} perspective
2. Key opportunities and risks you identify
3. Specific recommendations based on your expertise
4. Critical questions that need to be addressed

Format your response with clear sections and actionable insights.`,
        insights: [
          `Strategic implications from ${persona.role} perspective`,
          `Key risks and opportunities identified`,
          `Actionable recommendations based on ${persona.expertise}`,
          `Critical success factors and metrics to track`
        ]
      }
    })

    setTimeout(() => {
      setAnalysis(newAnalysis)
      setIsAnalyzing(false)
    }, 1500)
  }

  const copyPersonaPrompt = (personaIndex) => {
    const prompt = analysis[personaIndex]?.prompt
    if (prompt) {
      navigator.clipboard.writeText(prompt).then(() => {
        alert(`${personas[personaIndex].role} prompt copied to clipboard!`)
      })
    }
  }

  return (
    <div className="space-y-6">
      <Card className="course-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Multi-Persona Analysis Setup
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="scenario">Business Scenario</Label>
            <Textarea
              id="scenario"
              placeholder="Describe the business scenario you want to analyze from multiple perspectives..."
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              className="mt-1"
              rows={4}
            />
          </div>

          <div>
            <Label>Select Personas for Analysis</Label>
            <div className="grid md:grid-cols-3 gap-3 mt-2">
              {personas.map((persona, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all ${
                    selectedPersonas.includes(index) 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => togglePersona(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-3 h-3 rounded-full ${
                        selectedPersonas.includes(index) ? 'bg-primary' : 'bg-muted'
                      }`}></div>
                      <h4 className="font-medium text-sm">{persona.role}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">{persona.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Button 
            onClick={runAnalysis} 
            disabled={isAnalyzing}
            className="course-gradient border-0 text-white"
          >
            {isAnalyzing ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Brain className="w-4 h-4 mr-2" />
                Run Multi-Persona Analysis
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {Object.keys(analysis).length > 0 && (
        <div className="grid gap-4">
          {selectedPersonas.map(personaIndex => (
            <Card key={personaIndex} className="course-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    {personas[personaIndex].role} Analysis
                  </CardTitle>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => copyPersonaPrompt(personaIndex)}
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy Prompt
                  </Button>
                </div>
                <CardDescription>{personas[personaIndex].perspective}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="prompt" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="prompt">Generated Prompt</TabsTrigger>
                    <TabsTrigger value="insights">Expected Insights</TabsTrigger>
                  </TabsList>
                  <TabsContent value="prompt" className="mt-4">
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <pre className="text-sm text-slate-900 dark:text-slate-100 whitespace-pre-wrap">
                        {analysis[personaIndex].prompt}
                      </pre>
                    </div>
                  </TabsContent>
                  <TabsContent value="insights" className="mt-4">
                    <div className="space-y-2">
                      {analysis[personaIndex].insights.map((insight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

// Multi-Step Workflow Builder
export const WorkflowBuilder = ({ templates }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [customWorkflow, setCustomWorkflow] = useState({
    name: '',
    steps: ['']
  })
  const [generatedWorkflow, setGeneratedWorkflow] = useState('')

  const useTemplate = (templateIndex) => {
    const template = templates[templateIndex]
    setCustomWorkflow({
      name: template.name,
      steps: [...template.steps]
    })
    setSelectedTemplate(templateIndex)
  }

  const addStep = () => {
    setCustomWorkflow(prev => ({
      ...prev,
      steps: [...prev.steps, '']
    }))
  }

  const removeStep = (index) => {
    if (customWorkflow.steps.length > 1) {
      setCustomWorkflow(prev => ({
        ...prev,
        steps: prev.steps.filter((_, i) => i !== index)
      }))
    }
  }

  const updateStep = (index, value) => {
    setCustomWorkflow(prev => ({
      ...prev,
      steps: prev.steps.map((step, i) => i === index ? value : step)
    }))
  }

  const generateWorkflow = () => {
    if (!customWorkflow.name.trim()) {
      alert('Please enter a workflow name.')
      return
    }
    
    const validSteps = customWorkflow.steps.filter(step => step.trim())
    if (validSteps.length === 0) {
      alert('Please add at least one workflow step.')
      return
    }

    const workflow = `# ${customWorkflow.name} - Multi-Step Workflow

This workflow consists of ${validSteps.length} sequential steps. Each step should be completed before moving to the next.

## Workflow Steps:

${validSteps.map((step, i) => `### Step ${i + 1}: ${step}

**Prompt for this step:**
You are executing step ${i + 1} of the ${customWorkflow.name} workflow.

Current step objective: ${step}

${i > 0 ? `Previous steps completed: ${validSteps.slice(0, i).map((s, idx) => `${idx + 1}. ${s}`).join(', ')}` : 'This is the first step in the workflow.'}

${i < validSteps.length - 1 ? `Upcoming steps: ${validSteps.slice(i + 1).map((s, idx) => `${i + idx + 2}. ${s}`).join(', ')}` : 'This is the final step in the workflow.'}

Please complete this step thoroughly before proceeding to the next step.

---`).join('\n\n')}

## Workflow Completion
Once all steps are completed, provide a summary of the entire ${customWorkflow.name} process and key outcomes.`

    setGeneratedWorkflow(workflow)
  }

  const copyWorkflow = () => {
    if (!generatedWorkflow) {
      alert('Generate a workflow first!')
      return
    }
    navigator.clipboard.writeText(generatedWorkflow).then(() => {
      alert('Multi-step workflow copied to clipboard!')
    })
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="course-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Workflow className="w-5 h-5" />
              Build Your Workflow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="workflowName">Workflow Name</Label>
              <Input
                id="workflowName"
                placeholder="Enter workflow name..."
                value={customWorkflow.name}
                onChange={(e) => setCustomWorkflow(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label>Workflow Steps</Label>
                <Button size="sm" variant="outline" onClick={addStep}>
                  <Plus className="w-4 h-4 mr-1" />
                  Add Step
                </Button>
              </div>
              {customWorkflow.steps.map((step, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <div className="flex-1">
                    <Input
                      placeholder={`Step ${index + 1}: What needs to be done?`}
                      value={step}
                      onChange={(e) => updateStep(index, e.target.value)}
                    />
                  </div>
                  {customWorkflow.steps.length > 1 && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => removeStep(index)}
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Button onClick={generateWorkflow} className="course-gradient border-0 text-white">
                <Workflow className="w-4 h-4 mr-2" />
                Generate Workflow
              </Button>
              {generatedWorkflow && (
                <Button variant="outline" onClick={copyWorkflow}>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="course-card">
          <CardHeader>
            <CardTitle>Workflow Templates</CardTitle>
            <CardDescription>Start with proven workflow patterns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {templates.map((template, index) => (
              <Card key={index} className={`cursor-pointer transition-all ${selectedTemplate === index ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-sm">{template.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {template.steps.length} steps
                      </p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => useTemplate(index)}
                    >
                      Use Template
                    </Button>
                  </div>
                  {selectedTemplate === index && (
                    <div className="mt-3 pt-3 border-t">
                      <div className="space-y-1">
                        {template.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="text-xs text-muted-foreground">
                            {stepIndex + 1}. {step}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      {generatedWorkflow && (
        <Card className="course-card">
          <CardHeader>
            <CardTitle>Generated Multi-Step Workflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg max-h-96 overflow-y-auto">
              <pre className="text-sm text-slate-900 dark:text-slate-100 whitespace-pre-wrap">
                {generatedWorkflow}
              </pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
