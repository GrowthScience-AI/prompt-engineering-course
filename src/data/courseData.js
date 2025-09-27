export const courseData = {
  modules: [
    {
      id: 1,
      title: "Introduction to Prompt Engineering",
      icon: "BookOpen",
      lessons: 3,
      duration: "45 min",
      completed: true,
      description: "Learn the fundamentals of prompt engineering and its importance in AI interactions.",
      content: {
        overview: "Prompt engineering is the art and science of crafting effective instructions for AI models to produce desired outputs. This foundational module introduces you to the core concepts and historical context.",
        keyPoints: [
          "Understanding what prompt engineering is and why it matters",
          "The evolution of human-computer interaction",
          "Key terminology and concepts in the field",
          "Real-world applications and impact"
        ],
        interactiveElements: [
          {
            type: "timeline",
            title: "Evolution of Prompt Engineering",
            data: [
              { year: "1950s", event: "Early computer programming languages", description: "First structured instructions to computers" },
              { year: "1960s", event: "Command-line interfaces", description: "Text-based interaction with computers" },
              { year: "1990s", event: "Natural language processing", description: "Computers begin understanding human language" },
              { year: "2010s", event: "Machine learning boom", description: "AI models become more sophisticated" },
              { year: "2020s", event: "Large Language Models", description: "GPT and similar models revolutionize AI interaction" },
              { year: "2023+", event: "Prompt engineering emerges", description: "Specialized field for optimizing AI interactions" }
            ]
          },
          {
            type: "quiz",
            title: "Terminology Match",
            questions: [
              {
                question: "What is a prompt?",
                options: ["A computer program", "An instruction given to an AI model", "A type of database", "A programming language"],
                correct: 1
              },
              {
                question: "What does LLM stand for?",
                options: ["Large Language Model", "Linear Learning Machine", "Logical Language Method", "Limited Learning Module"],
                correct: 0
              }
            ]
          }
        ]
      }
    },
    {
      id: 2,
      title: "The Anatomy of a Prompt",
      icon: "Brain",
      lessons: 4,
      duration: "60 min",
      completed: false,
      current: true,
      description: "Break down the components of effective prompts and understand their relationships.",
      content: {
        overview: "Every effective prompt consists of four key components that work together to guide AI models toward desired outputs. Understanding these components is crucial for crafting successful prompts.",
        keyPoints: [
          "The four key components: Instruction, Context, Input Data, and Output Indicator",
          "How to write clear and effective instructions",
          "Providing relevant context to guide the model",
          "Structuring input data for optimal results"
        ],
        interactiveElements: [
          {
            type: "promptBuilder",
            title: "Interactive Prompt Builder",
            components: {
              instruction: {
                label: "Instruction",
                placeholder: "Tell the AI what to do...",
                examples: ["Summarize the following text", "Generate a creative story", "Analyze the data"]
              },
              context: {
                label: "Context",
                placeholder: "Provide background information...",
                examples: ["You are a marketing expert", "This is for a technical audience", "Focus on business applications"]
              },
              inputData: {
                label: "Input Data",
                placeholder: "Provide the data to work with...",
                examples: ["[Insert text here]", "[Upload file]", "[Paste data]"]
              },
              outputIndicator: {
                label: "Output Format",
                placeholder: "Specify the desired output format...",
                examples: ["Format as bullet points", "Provide a JSON response", "Write in paragraph form"]
              }
            }
          },
          {
            type: "diagramInteractive",
            title: "Prompt Component Diagram",
            components: [
              { id: "instruction", label: "Instruction", description: "The main task or command", color: "#4a90e2" },
              { id: "context", label: "Context", description: "Background information and constraints", color: "#6ba3f5" },
              { id: "inputData", label: "Input Data", description: "The specific content to process", color: "#8bb8f7" },
              { id: "outputIndicator", label: "Output Indicator", description: "Desired format and structure", color: "#abcdf9" }
            ]
          }
        ]
      }
    },
    {
      id: 3,
      title: "Core Prompting Techniques",
      icon: "Target",
      lessons: 5,
      duration: "75 min",
      completed: false,
      description: "Master zero-shot, few-shot, and chain-of-thought prompting techniques.",
      content: {
        overview: "Learn the fundamental techniques that form the backbone of effective prompt engineering. These core methods will dramatically improve your AI interactions.",
        keyPoints: [
          "Zero-shot prompting for direct task completion",
          "One-shot and few-shot learning with examples",
          "Chain-of-thought prompting for complex reasoning",
          "Self-consistency for improved accuracy"
        ],
        interactiveElements: [
          {
            type: "techniqueComparison",
            title: "Technique Comparison Tool",
            techniques: [
              {
                name: "Zero-Shot",
                description: "Direct instruction without examples",
                example: "Translate 'Hello world' to Spanish.",
                pros: ["Simple and direct", "No examples needed", "Quick to implement"],
                cons: ["May lack context", "Less reliable for complex tasks"]
              },
              {
                name: "Few-Shot",
                description: "Instruction with examples",
                example: "Translate to Spanish:\nEnglish: Hello → Spanish: Hola\nEnglish: Goodbye → Spanish: Adiós\nEnglish: Hello world → Spanish:",
                pros: ["More reliable", "Better context", "Improved accuracy"],
                cons: ["Requires good examples", "Longer prompts", "More complex"]
              },
              {
                name: "Chain-of-Thought",
                description: "Step-by-step reasoning",
                example: "Let's think step by step to solve this problem...",
                pros: ["Better reasoning", "Transparent process", "Higher accuracy"],
                cons: ["Longer responses", "More complex", "Requires careful design"]
              }
            ]
          }
        ]
      }
    },
    {
      id: 4,
      title: "Advanced Prompting Techniques",
      icon: "Lightbulb",
      lessons: 6,
      duration: "90 min",
      completed: false,
      description: "Explore advanced strategies like Tree of Thoughts and Graph-of-Thought.",
      content: {
        overview: "Dive into sophisticated prompting strategies that push the boundaries of AI capability. These advanced techniques are used by professionals for complex problem-solving.",
        keyPoints: [
          "Tree of Thoughts (ToT) for systematic exploration",
          "Maieutic Prompting using the Socratic method",
          "Graph-of-Thought (GoT) for complex reasoning",
          "When and how to apply advanced techniques"
        ],
        interactiveElements: [
          {
            type: "advancedVisualization",
            title: "Tree of Thoughts Visualization",
            technique: "tot",
            description: "Watch how ToT explores multiple reasoning paths"
          },
          {
            type: "caseStudy",
            title: "Real-World Applications",
            cases: [
              {
                title: "Legal Document Analysis",
                technique: "Graph-of-Thought",
                description: "How GoT helps analyze complex legal relationships",
                outcome: "95% accuracy in contract clause identification"
              },
              {
                title: "Scientific Research Planning",
                technique: "Tree of Thoughts",
                description: "Using ToT to explore research methodologies",
                outcome: "Identified 3 novel research approaches"
              }
            ]
          }
        ]
      }
    },
    {
      id: 5,
      title: "Practical Applications & Use Cases",
      icon: "Code",
      lessons: 4,
      duration: "80 min",
      completed: false,
      description: "Apply prompt engineering across various domains and real-world scenarios.",
      content: {
        overview: "See prompt engineering in action across different industries and use cases. Learn how to adapt techniques for specific domains and requirements.",
        keyPoints: [
          "Content creation and creative writing applications",
          "Code generation and debugging assistance",
          "Data analysis and extraction techniques",
          "Industry-specific applications and best practices"
        ],
        interactiveElements: [
          {
            type: "beforeAfter",
            title: "Transformation Gallery",
            examples: [
              {
                category: "Content Creation",
                before: "Write about AI",
                after: "As a technology journalist writing for business executives, create a 500-word article about AI's impact on workplace productivity. Include specific examples, statistics, and actionable insights. Format with clear headings and bullet points.",
                improvement: "300% more specific and actionable"
              },
              {
                category: "Code Generation",
                before: "Make a function",
                after: "Create a Python function that validates email addresses using regex. Include error handling, type hints, and comprehensive docstrings. Test with both valid and invalid examples.",
                improvement: "Complete, production-ready code"
              }
            ]
          },
          {
            type: "finalProject",
            title: "Capstone Challenge",
            description: "Apply all learned techniques to solve a real-world problem",
            scenarios: [
              {
                title: "Marketing Campaign Optimization",
                description: "Create prompts to generate, analyze, and optimize marketing content",
                requirements: ["Use multiple techniques", "Include evaluation criteria", "Demonstrate measurable improvement"]
              }
            ]
          }
        ]
      }
    },
    {
      id: 6,
      title: "The Future of Prompt Engineering",
      icon: "TrendingUp",
      lessons: 3,
      duration: "45 min",
      completed: false,
      description: "Discover emerging trends and the evolving landscape of AI interaction.",
      content: {
        overview: "Explore the cutting-edge developments in prompt engineering and prepare for the future of AI interaction. Understand emerging trends and career opportunities.",
        keyPoints: [
          "Emerging trends and research directions",
          "Automated prompt generation and optimization",
          "The evolving role of prompt engineers",
          "Career paths and continued learning resources"
        ],
        interactiveElements: [
          {
            type: "resourceLibrary",
            title: "Curated Learning Resources",
            categories: [
              {
                name: "Research Papers",
                resources: [
                  { title: "Chain-of-Thought Prompting", url: "#", type: "paper" },
                  { title: "Tree of Thoughts", url: "#", type: "paper" }
                ]
              },
              {
                name: "Tools & Platforms",
                resources: [
                  { title: "OpenAI Playground", url: "#", type: "tool" },
                  { title: "Prompt Engineering Guide", url: "#", type: "guide" }
                ]
              }
            ]
          },
          {
            type: "finalAssessment",
            title: "Course Completion Assessment",
            description: "Comprehensive quiz covering all course concepts"
          }
        ]
      }
    }
  ],
  
  userProgress: {
    currentModule: 2,
    completedModules: [1],
    overallProgress: 15,
    badges: ["First Steps", "Quick Learner"],
    timeSpent: 45
  }
}

export const badgeSystem = {
  badges: [
    { id: "first-steps", name: "First Steps", description: "Completed first module", icon: "🎯" },
    { id: "quick-learner", name: "Quick Learner", description: "Completed module in under 30 minutes", icon: "⚡" },
    { id: "perfectionist", name: "Perfectionist", description: "Scored 100% on a quiz", icon: "💯" },
    { id: "explorer", name: "Explorer", description: "Tried all interactive elements", icon: "🔍" },
    { id: "master", name: "Prompt Master", description: "Completed entire course", icon: "🏆" }
  ]
}
