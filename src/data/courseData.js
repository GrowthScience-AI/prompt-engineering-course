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
      description: "Master essential techniques for different types of AI interactions.",
      content: {
        overview: "Learn the fundamental prompting techniques that form the backbone of effective AI communication, from basic prompts to advanced structured approaches. These core methods will dramatically improve your AI interactions across all use cases.",
        keyPoints: [
          "Basic prompts: Direct, conversational requests with 65% baseline accuracy",
          "System prompts: Behavioral configuration achieving 78% consistency",
          "Instruction prompts: Structured commands with 85% task completion rate",
          "Zero-shot vs few-shot: Understanding when to use examples (92% accuracy with quality examples)",
          "Technique selection criteria based on task complexity and consistency requirements"
        ],
        interactiveElements: [
          {
            type: "techniqueComparison",
            title: "Technique Comparison Tool",
            techniques: [
              {
                name: "Basic Prompts",
                description: "Direct, conversational requests without extensive formatting",
                example: "Write a marketing email for our new CBD gummy product.",
                pros: ["Easy to use", "Natural interaction", "Quick to compose", "Flexible"],
                cons: ["Inconsistent results", "Limited control", "Context sensitive", "Ambiguity issues"],
                accuracy: "65%",
                useCase: "Quick content generation, brainstorming, simple tasks"
              },
              {
                name: "System Prompts",
                description: "Behavioral configuration that establishes persistent context",
                example: "You are a senior CPG marketing strategist specializing in hemp and CBD products. You have 10+ years of experience in retail market penetration and regulatory compliance. Always ensure FDA/FTC compliance in recommendations.",
                pros: ["Consistent behavior", "Domain expertise", "Compliance adherence", "Quality control"],
                cons: ["Setup complexity", "Less flexibility", "Context limitations"],
                accuracy: "78%",
                useCase: "Professional applications, consistent interactions, specialized domains"
              },
              {
                name: "Instruction Prompts",
                description: "Structured commands with explicit task specifications",
                example: "ROLE: Marketing strategist\nOBJECTIVE: Create campaign proposal\nTASKS: 1. Analyze market 2. Define strategy 3. Estimate budget\nFORMAT: Markdown with headers",
                pros: ["High accuracy", "Clear structure", "Predictable output", "Professional quality"],
                cons: ["More complex", "Time intensive", "Less conversational"],
                accuracy: "85%",
                useCase: "Complex tasks, professional deliverables, structured output"
              },
              {
                name: "Few-Shot Learning",
                description: "Learning from examples to establish patterns",
                example: "Example 1: Input: 'CBD for sleep' → Output: 'Supports relaxation' (compliant)\nExample 2: Input: 'CBD cures insomnia' → Output: 'Prohibited medical claim' (non-compliant)\nTask: Assess 'CBD helps with rest'",
                pros: ["Highest accuracy", "Pattern recognition", "Quality examples", "Consistent format"],
                cons: ["Requires good examples", "Longer prompts", "Example dependency"],
                accuracy: "92%",
                useCase: "Specialized tasks, quality-critical applications, pattern-based work"
              }
            ]
          },
          {
            type: "beforeAfter",
            title: "Technique Transformation Gallery",
            examples: [
              {
                category: "Content Creation",
                technique: "Basic → Instruction",
                before: "Write about CBD benefits",
                after: "ROLE: Health & wellness content writer\nTASK: Create educational content about CBD\nCONSTRAINTS: No medical claims, FDA compliant\nFORMAT: 300 words, 3 sections with headers\nTONE: Professional, informative, accessible",
                improvement: "85% more structured and compliant"
              },
              {
                category: "Data Analysis",
                technique: "Zero-shot → Few-shot",
                before: "Analyze this sales data",
                after: "Example analysis:\nQ1 Sales: $100K → 'Strong start, 15% above target'\nQ2 Sales: $80K → 'Declining trend, investigate causes'\nNow analyze: Q3 Sales: $120K",
                improvement: "92% more consistent analysis format"
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
      description: "Explore sophisticated methods for complex AI tasks and workflows.",
      content: {
        overview: "Dive into advanced prompting strategies including chain-of-thought reasoning, role-based prompting, and multi-step workflows for complex professional applications. These techniques are used by AI professionals for the most demanding tasks.",
        keyPoints: [
          "Chain-of-thought prompting for complex reasoning and step-by-step analysis",
          "Role-based prompting and persona development for specialized expertise",
          "Multi-step workflows and prompt chaining for complex processes",
          "Template systems for consistent, scalable results across teams",
          "Error handling and edge case management in production environments",
          "Performance optimization strategies for enterprise applications"
        ],
        interactiveElements: [
          {
            type: "chainOfThought",
            title: "Chain-of-Thought Reasoning Builder",
            description: "Build step-by-step reasoning prompts for complex problem solving",
            examples: [
              {
                problem: "Market Entry Strategy Analysis",
                steps: [
                  "First, analyze the target market size and growth potential",
                  "Next, evaluate competitive landscape and positioning opportunities", 
                  "Then, assess internal capabilities and resource requirements",
                  "Finally, synthesize findings into strategic recommendations"
                ],
                reasoning: "Breaking complex analysis into logical steps improves accuracy by 40%"
              }
            ]
          },
          {
            type: "roleBasedPrompting",
            title: "Multi-Persona Analysis Lab",
            description: "Use different AI personas to analyze scenarios from multiple perspectives",
            personas: [
              {
                role: "CEO",
                expertise: "Strategic vision, financial impact, market positioning",
                perspective: "High-level strategic implications and ROI considerations"
              },
              {
                role: "Marketing Director", 
                expertise: "Brand positioning, customer acquisition, campaign effectiveness",
                perspective: "Customer impact and marketing execution feasibility"
              },
              {
                role: "Financial Analyst",
                expertise: "Cost analysis, revenue projections, risk assessment",
                perspective: "Financial viability and investment requirements"
              }
            ]
          },
          {
            type: "workflowDesigner",
            title: "Multi-Step Workflow Builder",
            description: "Design complex prompt workflows with multiple stages and decision points",
            templates: [
              {
                name: "Content Marketing Workflow",
                steps: [
                  "Research and topic ideation",
                  "Content outline and structure",
                  "Draft creation and optimization",
                  "Review and compliance check",
                  "Distribution and promotion strategy"
                ]
              },
              {
                name: "Product Development Process",
                steps: [
                  "Market research and opportunity analysis",
                  "Concept development and validation",
                  "Technical feasibility assessment",
                  "Go-to-market strategy development",
                  "Launch planning and execution"
                ]
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
      description: "Apply prompt engineering skills to real-world business scenarios.",
      content: {
        overview: "Explore how prompt engineering applies across different industries and use cases, from content creation to data analysis and customer service automation. Learn to adapt techniques for specific domains and measure business impact.",
        keyPoints: [
          "Content creation: blogs, emails, social media with 300% efficiency gains",
          "Data analysis: reports, insights, visualizations with automated generation",
          "Customer service: chatbots, support tickets, FAQs with 85% automation rate",
          "Industry applications: healthcare, finance, education, e-commerce",
          "Compliance and ethical considerations for regulated industries",
          "ROI measurement and optimization strategies for business applications"
        ],
        interactiveElements: [
          {
            type: "industryScenarios",
            title: "Industry Scenario Simulator",
            description: "Practice prompting for different business contexts and industries",
            scenarios: [
              {
                industry: "E-commerce",
                challenge: "Product Description Generation",
                context: "Generate compelling product descriptions for 1000+ SKUs",
                solution: "Template-based prompting with brand voice consistency",
                roi: "75% time reduction, 40% increase in conversion rates"
              },
              {
                industry: "Healthcare",
                challenge: "Patient Communication",
                context: "Create patient-friendly explanations of medical procedures",
                solution: "Role-based prompting with compliance constraints",
                roi: "90% patient satisfaction, 50% reduced call volume"
              },
              {
                industry: "Financial Services",
                challenge: "Regulatory Reporting",
                context: "Automate compliance report generation and analysis",
                solution: "Multi-step workflows with validation checkpoints",
                roi: "80% time savings, 99.5% accuracy rate"
              }
            ]
          },
          {
            type: "roiCalculator",
            title: "Business Impact Calculator",
            description: "Calculate the ROI and business impact of prompt engineering implementations",
            metrics: [
              {
                category: "Time Savings",
                baseline: "Manual content creation: 2 hours per piece",
                optimized: "AI-assisted creation: 20 minutes per piece",
                improvement: "83% time reduction"
              },
              {
                category: "Quality Improvement",
                baseline: "Manual process: 70% first-pass approval",
                optimized: "Structured prompting: 95% first-pass approval",
                improvement: "36% quality increase"
              },
              {
                category: "Scale Enhancement",
                baseline: "Manual capacity: 10 pieces per day",
                optimized: "AI-augmented capacity: 50 pieces per day",
                improvement: "400% capacity increase"
              }
            ]
          },
          {
            type: "complianceFramework",
            title: "Compliance & Ethics Framework",
            description: "Learn to implement prompt engineering while maintaining regulatory compliance",
            frameworks: [
              {
                regulation: "GDPR (Data Privacy)",
                requirements: ["Data minimization", "Consent management", "Right to explanation"],
                promptGuidelines: ["Avoid personal data in examples", "Include privacy disclaimers", "Enable audit trails"]
              },
              {
                regulation: "FDA (Healthcare)",
                requirements: ["No medical claims", "Evidence-based statements", "Clear disclaimers"],
                promptGuidelines: ["Structure/function claims only", "Include required disclaimers", "Avoid therapeutic language"]
              },
              {
                regulation: "SEC (Financial)",
                requirements: ["Material disclosure", "Forward-looking statement warnings", "Risk disclosures"],
                promptGuidelines: ["Include risk warnings", "Avoid investment advice", "Maintain audit documentation"]
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
      description: "Explore emerging trends and prepare for the evolving AI landscape.",
      content: {
        overview: "Look ahead to emerging trends in AI and prompt engineering, including multimodal prompts, automated optimization, and the evolving role of human-AI collaboration. Prepare for the future of AI-augmented work.",
        keyPoints: [
          "Emerging AI capabilities: multimodal models, reasoning improvements, specialized domains",
          "Multimodal prompting: text, image, audio, video integration for richer interactions",
          "Automated prompt optimization and meta-prompting for self-improving systems",
          "Integration with business systems: CRM, ERP, workflow automation platforms",
          "Ethical considerations and responsible AI use in professional environments",
          "Career development in the AI-augmented workplace and skill evolution"
        ],
        interactiveElements: [
          {
            type: "futureTrends",
            title: "Future Trends Explorer",
            description: "Interactive exploration of emerging AI trends and their implications",
            trends: [
              {
                category: "Multimodal AI",
                timeline: "2024-2025",
                description: "AI models that seamlessly work with text, images, audio, and video",
                implications: ["Richer prompt possibilities", "Visual prompt engineering", "Cross-modal reasoning"],
                examples: ["Image + text prompts for design", "Audio analysis with text output", "Video content generation"]
              },
              {
                category: "Automated Optimization",
                timeline: "2025-2026", 
                description: "AI systems that automatically improve their own prompts",
                implications: ["Self-optimizing workflows", "Reduced manual tuning", "Adaptive performance"],
                examples: ["Auto-prompt refinement", "Performance-based optimization", "Context-aware adjustments"]
              },
              {
                category: "Enterprise Integration",
                timeline: "2024-2027",
                description: "Deep integration of AI prompting into business systems",
                implications: ["Workflow automation", "System interoperability", "Scalable AI deployment"],
                examples: ["CRM-integrated prompting", "ERP data analysis", "Automated reporting systems"]
              }
            ]
          },
          {
            type: "careerRoadmap",
            title: "AI Career Roadmap Generator",
            description: "Create your personalized learning and career development path",
            paths: [
              {
                role: "Prompt Engineer",
                skills: ["Advanced prompting techniques", "AI model understanding", "Domain expertise", "Quality assurance"],
                progression: ["Junior → Senior → Lead → Principal"],
                timeline: "6 months to 3 years",
                salary: "$80K - $200K+"
              },
              {
                role: "AI Product Manager",
                skills: ["Prompt engineering", "Product strategy", "User experience", "Business analysis"],
                progression: ["Associate → Senior → Director → VP"],
                timeline: "1-5 years",
                salary: "$120K - $300K+"
              },
              {
                role: "AI Consultant",
                skills: ["Multi-domain expertise", "Business strategy", "Implementation", "Training"],
                progression: ["Consultant → Senior → Principal → Partner"],
                timeline: "2-7 years",
                salary: "$100K - $400K+"
              }
            ]
          },
          {
            type: "resourceLibrary",
            title: "Curated Learning Resources",
            description: "Comprehensive collection of resources for continued learning",
            categories: [
              {
                name: "Research Papers",
                resources: [
                  { title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models", url: "#", type: "paper", difficulty: "Advanced" },
                  { title: "Tree of Thoughts: Deliberate Problem Solving with Large Language Models", url: "#", type: "paper", difficulty: "Advanced" },
                  { title: "Constitutional AI: Harmlessness from AI Feedback", url: "#", type: "paper", difficulty: "Intermediate" },
                  { title: "Prompt Engineering for Large Language Models", url: "#", type: "paper", difficulty: "Beginner" }
                ]
              },
              {
                name: "Tools & Platforms",
                resources: [
                  { title: "OpenAI Playground", url: "#", type: "tool", description: "Interactive prompt testing environment" },
                  { title: "Anthropic Console", url: "#", type: "tool", description: "Claude model interaction platform" },
                  { title: "Prompt Engineering Guide", url: "#", type: "guide", description: "Comprehensive best practices guide" },
                  { title: "LangChain", url: "#", type: "framework", description: "Framework for LLM applications" }
                ]
              },
              {
                name: "Communities",
                resources: [
                  { title: "Prompt Engineering Discord", url: "#", type: "community", members: "50K+" },
                  { title: "AI Prompt Engineers LinkedIn", url: "#", type: "community", members: "25K+" },
                  { title: "Reddit r/PromptEngineering", url: "#", type: "community", members: "100K+" }
                ]
              }
            ]
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
