# Interactive Prompt Engineering Course

A comprehensive, interactive learning platform for mastering AI prompt engineering techniques. Built with React and featuring hands-on exercises, real-world scenarios, and progressive skill development.

![TomsTools Logo](public/tomstools-logo.webp)

## 🚀 Features

### Core Learning Experience
- **6 Comprehensive Modules**: From basics to advanced techniques with complete content from original course outline
- **Interactive Learning**: Hands-on exercises with real-time feedback and intelligent validation
- **Progressive Difficulty**: Guided practice exercises and advanced challenges for each module
- **Industry Applications**: Real-world scenarios across healthcare, finance, e-commerce, and enterprise
- **Consolidated Lessons**: Overview, key concepts, and interactive elements on single pages
- **Functional Practice**: Every practice button launches real exercises with step-by-step guidance

### Technical Excellence
- **Modern UI**: Responsive design with TomsTools branding and dark theme color scheme
- **Progress Tracking**: Visual progress indicators, achievement system, and performance analytics
- **Smart Validation**: Intelligent answer checking with contextual feedback
- **Mobile Optimized**: Touch-friendly interface that works seamlessly across devices

## 📚 Course Modules

### Module 1: Introduction to Prompt Engineering
- **Guided Practice**: AI Communication Fundamentals - Evolution, goal setting, capability assessment
- **Challenge**: AI Strategy Development - Business implementation planning with risk assessment

### Module 2: The Anatomy of a Prompt
- **Guided Practice**: Prompt Component Mastery - Hands-on practice with four key components
- **Challenge**: Advanced Prompt Architecture - Multi-objective prompts with conditional logic

### Module 3: Core Prompting Techniques
- **Guided Practice**: Technique Selection Mastery - When to use different techniques with scenarios
- **Challenge**: Technique Optimization Laboratory - Performance benchmarking and hybrid development

### Module 4: Advanced Prompting Techniques
- **Guided Practice**: Chain-of-Thought Reasoning - Step-by-step problem decomposition
- **Challenge**: Multi-Perspective Strategic Analysis - Multiple AI personas for complex analysis

### Module 5: Practical Applications & Use Cases
- **Guided Practice**: Industry Application Workshop - Healthcare, finance, e-commerce applications
- **Challenge**: Enterprise AI Implementation - Multi-department AI strategies and governance

### Module 6: The Future of Prompt Engineering
- **Guided Practice**: Future-Ready Prompt Engineering - Multimodal prompts and automation
- **Challenge**: AI-Augmented Business Transformation - End-to-end workflow design

## 🎯 Interactive Elements

- **Prompt Builder**: Real-time prompt construction with component-by-component guidance
- **Technique Comparison**: Side-by-side analysis of different prompting approaches
- **Before/After Gallery**: Visual demonstrations of prompt improvements
- **Interactive Quizzes**: Knowledge validation with immediate feedback
- **Resource Library**: Curated learning materials organized by category
- **ROI Calculators**: Business impact analysis tools
- **Career Roadmaps**: Personalized learning and development paths

## 🛠 Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom TomsTools theme
- **Icons**: Lucide React
- **Build Tool**: Vite with optimized production builds
- **Package Manager**: pnpm for fast, efficient installs
- **Deployment**: Netlify-ready with automatic configuration

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GrowthScience-AI/prompt-engineering-course.git
   cd prompt-engineering-course
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm run build
```

The built files will be in the `dist` directory, optimized for production deployment.

## 🌐 Deployment

### Netlify Deployment (Recommended)

This project is optimized for Netlify with zero-configuration deployment:

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select this repository (`GrowthScience-AI/prompt-engineering-course`)

2. **Auto-Configuration**: 
   - Build settings are automatically configured via `netlify.toml`
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist`
   - Node version: 18
   - SPA redirects and performance headers included

3. **Deploy**: Netlify will automatically build and deploy your site with continuous deployment

### Alternative Deployment Options

- **Vercel**: Import from GitHub with automatic React detection
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront**: Static hosting with CDN
- **Any Static Host**: Upload `dist` folder contents

## 🎨 Customization

### Branding
- Replace `public/tomstools-logo.webp` with your logo
- Update colors in `src/App.css` (CSS custom properties)
- Modify course title and branding in `src/App.jsx`

### Content
- **Course Modules**: Edit `src/data/courseData.js`
- **Practice Exercises**: Modify `src/data/practiceExercises.js`
- **Interactive Components**: Customize `src/components/InteractiveElements.jsx`

### Styling
- **Theme Colors**: Update CSS custom properties in `src/App.css`
- **Component Styles**: Modify Tailwind classes in component files
- **Responsive Design**: Adjust breakpoints and mobile layouts

## 📁 Project Structure

```
prompt-engineering-course/
├── public/
│   ├── tomstools-logo.webp    # Brand logo
│   └── index.html             # HTML template
├── src/
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   ├── InteractiveElements.jsx  # Interactive learning tools
│   │   ├── ModuleContent.jsx        # Main lesson display
│   │   └── PracticeExercise.jsx     # Practice exercise system
│   ├── data/
│   │   ├── courseData.js            # Complete course content
│   │   └── practiceExercises.js     # All practice scenarios
│   ├── App.jsx                # Main application component
│   ├── App.css               # Global styles and theme
│   └── main.jsx              # Application entry point
├── netlify.toml              # Netlify deployment configuration
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite build configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── LICENSE                  # MIT License
└── README.md               # This file
```

## 🚀 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Asset Optimization**: Images and assets optimized for web
- **Caching Headers**: Long-term caching for static assets
- **Bundle Analysis**: Optimized bundle sizes for fast loading
- **Progressive Loading**: Smooth loading states and transitions

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint (if configured)

### Adding New Content

1. **New Module**: Add to `courseData.js` with complete content structure
2. **Practice Exercise**: Add to `practiceExercises.js` with validation logic
3. **Interactive Element**: Create component in `InteractiveElements.jsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern React 18 and Vite for optimal performance
- UI components inspired by shadcn/ui design system
- Icons provided by Lucide React icon library
- Designed specifically for the TomsTools platform
- Course content based on comprehensive prompt engineering research

## 📞 Support

For support and questions:
- Visit [TomsTools](https://tomstools.com)
- Open an issue in this repository
- Check the comprehensive documentation in the code

## 🎯 Live Demo

The course is deployed and ready for immediate use. Deploy to Netlify for your own instance or contribute to the open-source project.

---

**Made with ❤️ for the AI community | TomsTools Platform**
