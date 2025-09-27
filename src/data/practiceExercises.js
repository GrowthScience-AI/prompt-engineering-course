export const practiceExercises = {
  1: {
    guided: {
      title: "Guided Practice: AI Communication Fundamentals",
      difficulty: "Beginner",
      description: "Learn the basics of effective AI communication and understand the evolution of human-AI interaction",
      steps: [
        {
          title: "Understanding AI Communication Evolution",
          instruction: "Explore how human-AI interaction has evolved and identify key milestones.",
          scenario: "You're presenting to executives about implementing AI in your company. They ask: 'How is talking to AI different from using traditional software?' Explain the evolution from command-line interfaces to modern conversational AI.",
          hint: "Think about the progression: command-line → GUI → search engines → chatbots → conversational AI. Focus on the shift from rigid commands to natural language.",
          validation: (answer) => {
            const keywords = ['natural language', 'conversation', 'evolution', 'traditional', 'interface'];
            return keywords.some(keyword => answer.toLowerCase().includes(keyword));
          }
        },
        {
          title: "Identifying Communication Goals",
          instruction: "Learn to clearly define what you want to achieve with AI assistance.",
          scenario: "Your marketing team needs help with a product launch campaign. Instead of saying 'help with marketing,' define specific, measurable goals for AI assistance.",
          hint: "Consider: What type of content? For which audience? What tone? What format? What constraints or requirements?",
          validation: (answer) => {
            const specifics = ['audience', 'content', 'format', 'tone', 'goal'];
            return specifics.filter(word => answer.toLowerCase().includes(word)).length >= 2;
          }
        },
        {
          title: "Recognizing AI Capabilities and Limitations",
          instruction: "Understand what AI can and cannot do to set appropriate expectations.",
          scenario: "A colleague asks: 'Can AI replace our entire content team?' Provide a balanced assessment of AI capabilities and limitations in content creation.",
          hint: "Consider AI strengths (speed, consistency, ideation) and limitations (creativity, context, human judgment, brand voice).",
          validation: (answer) => {
            const balanced = answer.toLowerCase().includes('can') && (answer.toLowerCase().includes('cannot') || answer.toLowerCase().includes('limitation'));
            return balanced;
          }
        }
      ]
    },
    challenge: {
      title: "Challenge: AI Strategy Development",
      difficulty: "Intermediate",
      description: "Develop a comprehensive AI implementation strategy for a business scenario",
      steps: [
        {
          title: "Business Case Analysis",
          instruction: "Analyze a business scenario and identify optimal AI implementation opportunities.",
          scenario: "You're consulting for a mid-size e-commerce company (500 employees, $50M revenue) that wants to implement AI. They have challenges with: customer service response times, product description writing, inventory forecasting, and personalized marketing. Prioritize these use cases and explain your reasoning.",
          hint: "Consider factors like: implementation complexity, ROI potential, resource requirements, and business impact. Think about quick wins vs. long-term strategic value.",
          validation: (answer) => {
            const considerations = ['roi', 'complexity', 'impact', 'resource', 'priority'];
            return considerations.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        },
        {
          title: "Implementation Roadmap",
          instruction: "Create a phased implementation plan with timelines and success metrics.",
          scenario: "Design a 12-month AI implementation roadmap for the e-commerce company. Include phases, timelines, resource requirements, and success metrics for each initiative.",
          hint: "Start with high-impact, low-complexity initiatives. Consider pilot phases, scaling strategies, and change management. Define measurable KPIs for each phase.",
          validation: (answer) => {
            const roadmapElements = ['phase', 'timeline', 'metric', 'pilot', 'scale'];
            return roadmapElements.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        },
        {
          title: "Risk Assessment and Mitigation",
          instruction: "Identify potential risks and develop mitigation strategies.",
          scenario: "What are the main risks of AI implementation for this e-commerce company, and how would you mitigate them? Consider technical, business, and ethical risks.",
          hint: "Think about: data privacy, accuracy issues, employee concerns, customer trust, technical dependencies, and cost overruns.",
          validation: (answer) => {
            const risks = ['privacy', 'accuracy', 'employee', 'trust', 'cost', 'technical'];
            return risks.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        }
      ]
    }
  },
  2: {
    guided: {
      title: "Guided Practice: Prompt Component Mastery",
      difficulty: "Beginner",
      description: "Master the four key components of effective prompts through hands-on practice",
      steps: [
        {
          title: "Component Identification",
          instruction: "Analyze existing prompts and identify the four key components.",
          scenario: "Analyze this prompt: 'As a senior marketing analyst with expertise in B2B SaaS, review the attached quarterly sales report and create a executive summary highlighting key trends, growth opportunities, and areas of concern. Format as a 2-page memo with bullet points and include specific metrics.' Identify the Instruction, Context, Input Data, and Output Format components.",
          hint: "Look for: What role is assigned? What task is being requested? What information is provided? How should the output be structured?",
          validation: (answer) => {
            const components = ['instruction', 'context', 'input', 'output', 'role', 'task', 'format'];
            return components.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Building Effective Instructions",
          instruction: "Create clear, actionable instructions using strong action verbs.",
          scenario: "Your team needs AI help with competitive analysis. Instead of 'look at competitors,' write a clear instruction that specifies exactly what analysis should be performed.",
          hint: "Use specific action verbs like 'analyze,' 'compare,' 'evaluate,' 'identify.' Be specific about what aspects to focus on.",
          validation: (answer) => {
            const actionVerbs = ['analyze', 'compare', 'evaluate', 'identify', 'assess', 'examine'];
            return actionVerbs.some(verb => answer.toLowerCase().includes(verb));
          }
        },
        {
          title: "Context and Output Optimization",
          instruction: "Provide relevant context and specify desired output format for optimal results.",
          scenario: "You need AI to help create social media content for a B2B cybersecurity company. Write the context and output format sections that would ensure brand-appropriate, professional content.",
          hint: "Context should include: industry, audience, brand voice, key messages. Output format should specify: platform, length, structure, tone.",
          validation: (answer) => {
            const contextElements = ['industry', 'audience', 'brand', 'professional', 'format', 'structure'];
            return contextElements.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        }
      ]
    },
    challenge: {
      title: "Challenge: Advanced Prompt Architecture",
      difficulty: "Advanced",
      description: "Design sophisticated prompts with complex component relationships",
      steps: [
        {
          title: "Multi-Objective Prompt Design",
          instruction: "Create a prompt that accomplishes multiple related objectives simultaneously.",
          scenario: "Design a prompt for creating a comprehensive product launch plan that includes: market analysis, competitive positioning, messaging strategy, channel selection, and success metrics. The prompt should produce a cohesive strategy document.",
          hint: "Structure multiple instructions hierarchically. Use clear section headers. Ensure each component builds on the others logically.",
          validation: (answer) => {
            const objectives = ['market', 'competitive', 'messaging', 'channel', 'metrics', 'strategy'];
            return objectives.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Conditional Logic Implementation",
          instruction: "Build prompts with conditional logic that adapt based on input characteristics.",
          scenario: "Create a prompt for customer service responses that adapts its tone and approach based on customer sentiment (angry, confused, satisfied) and issue type (technical, billing, general inquiry).",
          hint: "Use conditional statements like 'If the customer seems angry, then...' or 'For technical issues, include...' Structure different response paths clearly.",
          validation: (answer) => {
            const conditionals = ['if', 'then', 'when', 'depending', 'based on', 'adapt'];
            return conditionals.some(word => answer.toLowerCase().includes(word));
          }
        },
        {
          title: "Quality Assurance Integration",
          instruction: "Incorporate validation and quality checks directly into prompt structure.",
          scenario: "Design a prompt for generating regulatory-compliant marketing copy that includes built-in quality checks and validation steps to ensure compliance with FDA/FTC guidelines.",
          hint: "Include validation steps like 'Check that no medical claims are made' or 'Verify all statements are substantiated.' Build in review criteria and compliance checklists.",
          validation: (answer) => {
            const qualityElements = ['check', 'verify', 'validate', 'compliance', 'review', 'ensure'];
            return qualityElements.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        }
      ]
    }
  },
  3: {
    guided: {
      title: "Guided Practice: Technique Selection Mastery",
      difficulty: "Intermediate",
      description: "Learn to choose and implement the right prompting technique for different scenarios",
      steps: [
        {
          title: "Scenario-Based Technique Selection",
          instruction: "Analyze different scenarios and select the most appropriate prompting technique.",
          scenario: "You have three tasks: 1) Generate a quick blog post idea, 2) Create consistent customer service responses, 3) Analyze complex financial data. Match each task with the best prompting technique (Basic, System, Instruction, Few-shot) and explain your reasoning.",
          hint: "Consider: task complexity, consistency needs, domain expertise required, and output format requirements. Simple tasks may need basic prompts while complex analysis needs structured approaches.",
          validation: (answer) => {
            const techniques = ['basic', 'system', 'instruction', 'few-shot', 'complex', 'simple', 'consistent'];
            return techniques.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Zero-Shot vs Few-Shot Implementation",
          instruction: "Practice implementing both zero-shot and few-shot approaches for the same task.",
          scenario: "Create both a zero-shot and few-shot prompt for classifying customer feedback as 'positive,' 'negative,' or 'neutral.' Compare the approaches and predict which would be more accurate.",
          hint: "Zero-shot relies on the AI's training. Few-shot provides examples to establish patterns. Consider which approach would be more reliable for consistent classification.",
          validation: (answer) => {
            const approaches = ['zero-shot', 'few-shot', 'example', 'classification', 'pattern', 'accurate'];
            return approaches.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        },
        {
          title: "System Prompt Configuration",
          instruction: "Design a system prompt that establishes persistent behavior and expertise.",
          scenario: "Create a system prompt for an AI assistant that helps with content marketing for SaaS companies. The assistant should maintain expertise in B2B marketing, understand SaaS metrics, and always consider compliance with email marketing regulations.",
          hint: "Define role, expertise areas, behavioral guidelines, and constraints. Include communication style and domain-specific knowledge requirements.",
          validation: (answer) => {
            const systemElements = ['role', 'expertise', 'behavior', 'compliance', 'saas', 'marketing'];
            return systemElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        }
      ]
    },
    challenge: {
      title: "Challenge: Technique Optimization Laboratory",
      difficulty: "Advanced",
      description: "Optimize prompting techniques for maximum effectiveness and consistency",
      steps: [
        {
          title: "Performance Benchmarking",
          instruction: "Design experiments to measure and compare technique effectiveness.",
          scenario: "You need to optimize prompts for generating product descriptions. Design a testing methodology to compare Basic, Instruction, and Few-shot approaches. Define metrics, test cases, and evaluation criteria.",
          hint: "Consider metrics like: accuracy, consistency, brand alignment, conversion potential. Design test cases that represent real scenarios. Include both quantitative and qualitative measures.",
          validation: (answer) => {
            const benchmarkElements = ['metric', 'test', 'compare', 'accuracy', 'consistency', 'evaluation'];
            return benchmarkElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Hybrid Technique Development",
          instruction: "Combine multiple techniques to create optimized hybrid approaches.",
          scenario: "Design a hybrid prompting approach that combines System prompts for consistency, Few-shot learning for pattern recognition, and Instruction formatting for structured output. Apply this to creating technical documentation.",
          hint: "Layer techniques strategically: System prompt for role/behavior, Few-shot examples for format/style, Instruction structure for organization. Ensure techniques complement rather than conflict.",
          validation: (answer) => {
            const hybridElements = ['system', 'few-shot', 'instruction', 'combine', 'layer', 'complement'];
            return hybridElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Scalability and Maintenance",
          instruction: "Design prompting systems that can scale across teams and maintain quality over time.",
          scenario: "Create a framework for managing prompts across a marketing team of 20 people. Include version control, quality standards, performance monitoring, and continuous improvement processes.",
          hint: "Consider: template libraries, approval workflows, performance tracking, feedback loops, training requirements, and update procedures.",
          validation: (answer) => {
            const scaleElements = ['template', 'version', 'quality', 'monitoring', 'team', 'framework'];
            return scaleElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        }
      ]
    }
  },
  4: {
    guided: {
      title: "Guided Practice: Chain-of-Thought Reasoning",
      difficulty: "Intermediate",
      description: "Master step-by-step reasoning techniques for complex problem solving",
      steps: [
        {
          title: "Problem Decomposition",
          instruction: "Learn to break complex problems into logical, manageable steps.",
          scenario: "You need to analyze whether your company should enter a new market. Break this complex decision into a logical sequence of analysis steps that build upon each other.",
          hint: "Consider: market research, competitive analysis, internal capabilities, financial projections, risk assessment, and strategic fit. Each step should inform the next.",
          validation: (answer) => {
            const analysisSteps = ['market', 'competitive', 'capabilities', 'financial', 'risk', 'strategic'];
            return analysisSteps.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Step-by-Step Prompt Construction",
          instruction: "Build prompts that guide AI through logical reasoning chains.",
          scenario: "Create a chain-of-thought prompt for evaluating a potential business partnership. The prompt should walk through due diligence, strategic alignment, operational integration, and risk assessment in a logical sequence.",
          hint: "Use transition phrases like 'First, analyze...', 'Next, consider...', 'Then, evaluate...', 'Finally, synthesize...' to create clear reasoning chains.",
          validation: (answer) => {
            const transitions = ['first', 'next', 'then', 'finally', 'analyze', 'consider', 'evaluate'];
            return transitions.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Reasoning Validation",
          instruction: "Implement validation steps to ensure logical consistency throughout the reasoning chain.",
          scenario: "Add validation checkpoints to your business partnership evaluation prompt. Include steps that verify logical consistency and identify potential gaps in reasoning.",
          hint: "Include questions like 'Does this conclusion follow from the previous analysis?' and 'Are there any logical gaps or missing considerations?' Build in self-checking mechanisms.",
          validation: (answer) => {
            const validationElements = ['check', 'verify', 'consistent', 'logical', 'gap', 'conclusion'];
            return validationElements.filter(word => answer.toLowerCase().includes(word)).length >= 3;
          }
        }
      ]
    },
    challenge: {
      title: "Challenge: Multi-Perspective Strategic Analysis",
      difficulty: "Advanced",
      description: "Use multiple AI personas to analyze complex business scenarios from different viewpoints",
      steps: [
        {
          title: "Persona Development and Specialization",
          instruction: "Create distinct AI personas with specialized expertise and decision-making frameworks.",
          scenario: "Develop three distinct personas to analyze a potential acquisition: a Financial Analyst (focused on valuation and ROI), a Strategic Planner (focused on market position and synergies), and a Risk Manager (focused on potential downsides and mitigation). Define their expertise, priorities, and analytical frameworks.",
          hint: "Each persona should have: specific domain expertise, unique analytical lens, distinct priorities, and characteristic communication style. Avoid overlap in their focus areas.",
          validation: (answer) => {
            const personaElements = ['financial', 'strategic', 'risk', 'expertise', 'priorities', 'framework'];
            return personaElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        },
        {
          title: "Multi-Perspective Analysis Execution",
          instruction: "Have each persona analyze the same scenario from their unique viewpoint.",
          scenario: "Your company is considering acquiring a smaller competitor for $50M. Have each persona (Financial Analyst, Strategic Planner, Risk Manager) analyze this acquisition opportunity, focusing on their area of expertise while maintaining their distinct perspective.",
          hint: "Financial Analyst: valuation, cash flow, ROI. Strategic Planner: market share, synergies, competitive advantage. Risk Manager: integration risks, market risks, financial risks.",
          validation: (answer) => {
            const perspectives = ['valuation', 'synergies', 'integration', 'market', 'roi', 'competitive'];
            return perspectives.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Synthesis and Decision Framework",
          instruction: "Combine insights from all personas into a comprehensive analysis and recommendation.",
          scenario: "Synthesize the different perspectives from your three personas into a unified analysis. Identify areas of agreement and disagreement, weigh different priorities, and create a balanced recommendation with supporting rationale.",
          hint: "Look for: consensus points, conflicting viewpoints, risk-reward trade-offs, and decision criteria. Create a framework for weighing different perspectives based on company priorities.",
          validation: (answer) => {
            const synthesisElements = ['consensus', 'conflict', 'weigh', 'balance', 'recommendation', 'rationale'];
            return synthesisElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        }
      ]
    }
  },
  5: {
    guided: {
      title: "Guided Practice: Industry Application Workshop",
      difficulty: "Intermediate",
      description: "Apply prompt engineering to real-world business scenarios across different industries",
      steps: [
        {
          title: "Industry-Specific Adaptation",
          instruction: "Adapt prompting techniques for specific industry requirements and constraints.",
          scenario: "You're implementing AI for three different clients: a healthcare clinic (patient communication), a financial services firm (compliance reporting), and an e-commerce company (product descriptions). Identify the unique requirements and constraints for each industry.",
          hint: "Healthcare: HIPAA compliance, medical accuracy, patient sensitivity. Finance: SEC regulations, risk disclosures, accuracy requirements. E-commerce: SEO optimization, conversion focus, brand consistency.",
          validation: (answer) => {
            const industries = ['healthcare', 'financial', 'ecommerce', 'compliance', 'regulation', 'accuracy'];
            return industries.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Compliance-Aware Prompt Design",
          instruction: "Create prompts that incorporate regulatory and ethical constraints.",
          scenario: "Design a prompt for generating marketing content for a financial services company that must comply with SEC regulations. The prompt should ensure no investment advice is given, appropriate risk warnings are included, and all claims are substantiated.",
          hint: "Include explicit compliance constraints: 'Do not provide investment advice', 'Include risk warnings', 'Substantiate all claims', 'Use appropriate disclaimers'.",
          validation: (answer) => {
            const complianceElements = ['investment advice', 'risk warning', 'substantiate', 'disclaimer', 'sec', 'regulation'];
            return complianceElements.filter(phrase => answer.toLowerCase().includes(phrase)).length >= 3;
          }
        },
        {
          title: "ROI Measurement and Optimization",
          instruction: "Develop metrics and optimization strategies for measuring business impact.",
          scenario: "Create a framework for measuring the ROI of AI implementation in customer service. Include both quantitative metrics (response time, resolution rate) and qualitative measures (customer satisfaction, agent productivity).",
          hint: "Consider: time savings, quality improvements, cost reductions, customer satisfaction, scalability benefits. Include baseline measurements and improvement targets.",
          validation: (answer) => {
            const roiElements = ['time', 'quality', 'cost', 'satisfaction', 'productivity', 'baseline', 'target'];
            return roiElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        }
      ]
    },
    challenge: {
      title: "Challenge: Enterprise AI Implementation",
      difficulty: "Advanced",
      description: "Design and implement a comprehensive AI strategy for a large organization",
      steps: [
        {
          title: "Multi-Department Integration Strategy",
          instruction: "Design an AI implementation that serves multiple departments with different needs.",
          scenario: "You're implementing AI for a 1000-person manufacturing company. Marketing needs content creation, Sales needs lead qualification, HR needs resume screening, and Operations needs predictive maintenance insights. Design an integrated approach that serves all departments while maintaining consistency and governance.",
          hint: "Consider: shared infrastructure, common standards, department-specific customization, data governance, training requirements, and change management.",
          validation: (answer) => {
            const integrationElements = ['marketing', 'sales', 'hr', 'operations', 'governance', 'standards', 'training'];
            return integrationElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        },
        {
          title: "Governance and Quality Assurance",
          instruction: "Establish governance frameworks and quality control systems for enterprise AI use.",
          scenario: "Create a governance framework that ensures AI outputs meet quality standards, comply with regulations, maintain brand consistency, and provide audit trails. Include approval workflows, quality metrics, and continuous monitoring systems.",
          hint: "Include: approval hierarchies, quality checkpoints, compliance verification, brand guidelines, audit logging, performance monitoring, and feedback loops.",
          validation: (answer) => {
            const governanceElements = ['approval', 'quality', 'compliance', 'brand', 'audit', 'monitoring', 'feedback'];
            return governanceElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        },
        {
          title: "Change Management and Adoption",
          instruction: "Develop strategies for successful AI adoption across the organization.",
          scenario: "Design a change management program that addresses employee concerns, provides adequate training, measures adoption success, and ensures sustainable implementation. Consider different user groups: executives, managers, and front-line employees.",
          hint: "Address: resistance to change, skill development, success metrics, communication strategy, support systems, and continuous improvement processes.",
          validation: (answer) => {
            const changeElements = ['training', 'adoption', 'resistance', 'communication', 'support', 'improvement', 'success'];
            return changeElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        }
      ]
    }
  },
  6: {
    guided: {
      title: "Guided Practice: Future-Ready Prompt Engineering",
      difficulty: "Intermediate",
      description: "Explore emerging trends and prepare for the evolving AI landscape",
      steps: [
        {
          title: "Multimodal Prompt Design",
          instruction: "Learn to work with prompts that combine text, images, and other media types.",
          scenario: "You're designing a marketing campaign that needs to work across text, visual, and audio content. Create a prompt framework that can generate consistent brand messaging across all these modalities while maintaining visual and tonal coherence.",
          hint: "Consider how visual elements inform text generation, how brand voice translates across media types, and how to maintain consistency while adapting to each medium's strengths.",
          validation: (answer) => {
            const multimodalElements = ['text', 'visual', 'audio', 'brand', 'consistency', 'media', 'coherence'];
            return multimodalElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Automated Optimization Strategies",
          instruction: "Design prompts that can self-improve based on performance feedback.",
          scenario: "Create a prompt system for email marketing that can automatically optimize based on open rates, click-through rates, and conversion data. The system should learn from performance and adjust its approach over time.",
          hint: "Include feedback loops, performance metrics, A/B testing capabilities, and iterative improvement mechanisms. Consider how to balance automation with human oversight.",
          validation: (answer) => {
            const optimizationElements = ['feedback', 'performance', 'metrics', 'testing', 'improvement', 'automation'];
            return optimizationElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        },
        {
          title: "Career Development Planning",
          instruction: "Create a personal development plan for staying current with AI advancements.",
          scenario: "Design a 12-month learning plan to advance your prompt engineering skills and prepare for emerging AI capabilities. Include skill development, networking, practical projects, and staying current with research.",
          hint: "Consider: technical skills, industry knowledge, practical experience, professional network, continuous learning resources, and emerging technology trends.",
          validation: (answer) => {
            const careerElements = ['skills', 'learning', 'networking', 'projects', 'research', 'development'];
            return careerElements.filter(word => answer.toLowerCase().includes(word)).length >= 4;
          }
        }
      ]
    },
    challenge: {
      title: "Challenge: AI-Augmented Business Transformation",
      difficulty: "Advanced",
      description: "Design comprehensive AI-augmented workflows for business transformation",
      steps: [
        {
          title: "End-to-End Workflow Design",
          instruction: "Design complete business workflows that integrate AI at multiple touchpoints.",
          scenario: "Create an end-to-end product development workflow for a SaaS company that leverages AI throughout: market research, feature ideation, technical specification, user testing, marketing launch, and performance analysis. Show how AI augments human decision-making at each stage.",
          hint: "Map the entire workflow, identify AI integration points, define human-AI collaboration patterns, and ensure seamless handoffs between stages.",
          validation: (answer) => {
            const workflowElements = ['research', 'ideation', 'specification', 'testing', 'launch', 'analysis', 'collaboration'];
            return workflowElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        },
        {
          title: "Human-AI Collaboration Optimization",
          instruction: "Define optimal collaboration patterns between humans and AI systems.",
          scenario: "For your SaaS product development workflow, specify when humans should lead, when AI should lead, and how they should collaborate most effectively. Include decision-making frameworks, quality control mechanisms, and escalation procedures.",
          hint: "Consider human strengths (creativity, judgment, context) vs AI strengths (speed, consistency, data processing). Design complementary rather than competitive relationships.",
          validation: (answer) => {
            const collaborationElements = ['human', 'ai', 'lead', 'collaborate', 'decision', 'quality', 'escalation'];
            return collaborationElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        },
        {
          title: "Continuous Learning and Adaptation",
          instruction: "Implement systems for continuous improvement and adaptation to new AI capabilities.",
          scenario: "Design a framework for your AI-augmented workflows to continuously learn and adapt as new AI capabilities emerge. Include performance monitoring, feedback collection, technology assessment, and workflow evolution processes.",
          hint: "Build in flexibility for new AI capabilities, establish learning feedback loops, create technology evaluation processes, and plan for workflow evolution.",
          validation: (answer) => {
            const adaptationElements = ['learning', 'adapt', 'monitoring', 'feedback', 'technology', 'evolution', 'flexibility'];
            return adaptationElements.filter(word => answer.toLowerCase().includes(word)).length >= 5;
          }
        }
      ]
    }
  }
}

// Validation functions for practice exercises
export const validateAnswer = (moduleId, exerciseType, stepIndex, answer) => {
  const exercise = practiceExercises[moduleId]?.[exerciseType];
  if (!exercise || !exercise.steps[stepIndex]) return false;
  
  const step = exercise.steps[stepIndex];
  if (step.validation) {
    return step.validation(answer);
  }
  
  // Default validation - check for minimum length and effort
  return answer.length > 50 && answer.split(' ').length > 10;
}

// Scoring system for practice exercises
export const calculateScore = (moduleId, exerciseType, answers) => {
  const exercise = practiceExercises[moduleId]?.[exerciseType];
  if (!exercise) return 0;
  
  let totalScore = 0;
  const maxScore = exercise.steps.length * 100;
  
  exercise.steps.forEach((step, index) => {
    if (answers[index]) {
      const isValid = validateAnswer(moduleId, exerciseType, index, answers[index]);
      if (isValid) {
        totalScore += 100;
      } else {
        // Partial credit for effort
        totalScore += Math.min(50, answers[index].length);
      }
    }
  });
  
  return Math.round((totalScore / maxScore) * 100);
}

// Feedback generation for practice exercises
export const generateFeedback = (moduleId, exerciseType, stepIndex, answer) => {
  const isValid = validateAnswer(moduleId, exerciseType, stepIndex, answer);
  const exercise = practiceExercises[moduleId]?.[exerciseType];
  const step = exercise?.steps[stepIndex];
  
  if (!step) return "Unable to provide feedback.";
  
  if (isValid) {
    return `Excellent work! Your answer demonstrates a solid understanding of ${step.title.toLowerCase()}. You've addressed the key concepts and provided thoughtful analysis.`;
  } else {
    return `Good effort! To improve your answer, consider: ${step.hint} Try to be more specific and include more of the key concepts mentioned in the hint.`;
  }
}
