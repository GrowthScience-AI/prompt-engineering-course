# Interactive Prompt Engineering Course

A comprehensive, interactive learning platform for mastering AI prompt engineering techniques. Built with React and featuring hands-on exercises, real-world scenarios, and progressive skill development.

![TomsTools Logo](public/tomstools-logo.webp)

## 🚀 Features

- **6 Comprehensive Modules**: From basics to advanced techniques
- **Interactive Learning**: Hands-on exercises and real-time feedback
- **Progressive Difficulty**: Guided practice and advanced challenges
- **Industry Applications**: Real-world scenarios across multiple sectors
- **Modern UI**: Responsive design with dark/light mode support
- **Progress Tracking**: Visual progress indicators and achievement system

## 📚 Course Modules

1. **Introduction to Prompt Engineering** - Fundamentals and historical context
2. **The Anatomy of a Prompt** - Four key components with interactive builder
3. **Core Prompting Techniques** - Basic, system, instruction, and few-shot methods
4. **Advanced Prompting Techniques** - Chain-of-thought, role-based, and multi-step workflows
5. **Practical Applications & Use Cases** - Real-world business scenarios and ROI analysis
6. **The Future of Prompt Engineering** - Emerging trends and career development

## 🛠 Technology Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Deployment**: Netlify-ready configuration

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

The built files will be in the `dist` directory.

## 🌐 Deployment

### Netlify Deployment

This project is optimized for Netlify deployment with automatic configuration:

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select this repository

2. **Build Settings** (auto-configured via `netlify.toml`):
   - Build command: `pnpm install && pnpm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy**: Netlify will automatically build and deploy your site

### Manual Deployment

You can also deploy the built files to any static hosting service:

1. Run `pnpm run build`
2. Upload the contents of the `dist` folder to your hosting provider

## 🎨 Customization

### Branding

- Replace `public/tomstools-logo.webp` with your own logo
- Update colors in `src/App.css` to match your brand
- Modify the course title and description in `src/App.jsx`

### Content

- Course content is stored in `src/data/courseData.js`
- Practice exercises are in `src/data/practiceExercises.js`
- Interactive components are in `src/components/InteractiveElements.jsx`

## 📁 Project Structure

```
prompt-engineering-course/
├── public/
│   ├── tomstools-logo.webp
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/                 # UI components
│   │   ├── InteractiveElements.jsx
│   │   ├── ModuleContent.jsx
│   │   └── PracticeExercise.jsx
│   ├── data/
│   │   ├── courseData.js       # Course content
│   │   └── practiceExercises.js # Practice exercises
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── netlify.toml               # Netlify configuration
├── package.json
├── vite.config.js
└── README.md
```

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

- Built with modern React and Vite
- UI components inspired by shadcn/ui
- Icons provided by Lucide React
- Designed for the TomsTools platform

## 📞 Support

For support and questions, please visit [TomsTools](https://tomstools.com) or open an issue in this repository.

---

**Made with ❤️ for the AI community**
