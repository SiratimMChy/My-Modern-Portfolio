const SourceCode = ({ projectId, onNavigateHome }) => {
  // Get project data based on projectId prop
  const getProject = (id) => {
    // Project data (you can move this to a shared file later)
    const projects = {
      'pawmart': {
        name: 'PawMart',
        description: 'A comprehensive pet adoption and marketplace platform',
        tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase']
      },
      'hemovia': {
        name: 'Hemovia',
        description: 'Blood donation management platform',
        tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js']
      },
      'she-app': {
        name: 'She - Safety App',
        description: 'Women\'s safety Android application',
        tech: ['Java', 'Android SDK', 'Firebase', 'Google Maps API']
      },
      'gamehub': {
        name: 'GameHub',
        description: 'Gaming platform for discovering indie games',
        tech: ['React', 'Firebase', 'Framer Motion', 'React Router']
      },
      'classmate': {
        name: 'ClassMate',
        description: 'Web-based academic collaboration system',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
      },
      'smc-photography': {
        name: 'SMC Photography',
        description: 'Professional photography portfolio website',
        tech: ['HTML5', 'CSS3', 'Bootstrap', 'PHP', 'MySQL']
      }
    }
    
    return projects[id] || null
  }

  const project = getProject(projectId)

  const handleContactOwner = () => {
    // Use the onNavigateHome prop to go back to the main page and scroll to contact
    if (onNavigateHome) {
      onNavigateHome()
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // Fallback navigation
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
      if (window.location.pathname !== '/') {
        window.location.href = '/#contact'
      }
    }
  }

  const handleBackToProjects = () => {
    // Use the onNavigateHome prop to go back to the main page
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      // Fallback navigation
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
      if (window.location.pathname !== '/') {
        window.location.href = '/#projects'
      }
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project Not Found</h1>
          <button
            onClick={handleBackToProjects}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <span className="text-slate-600 dark:text-slate-400 font-medium text-sm tracking-wide uppercase">Source Code</span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 mb-6 leading-tight">
            {project.name}
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200/50 dark:border-slate-700/50">
          {/* Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <i className="bx bxl-github text-3xl text-white"></i>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Source Code Access
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              The source code for <span className="font-semibold text-blue-600 dark:text-blue-400">{project.name}</span> is available upon request. 
              Please contact the project owner to discuss access, collaboration opportunities, or any questions about the implementation.
            </p>
          </div>

          {/* Technology Stack */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <i className="bx bx-cog text-blue-600"></i>
              Built With
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-8 border border-blue-200/50 dark:border-blue-800/50">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <i className="bx bx-info-circle text-white text-xl"></i>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Why Contact for Source Code?</h4>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Discuss collaboration opportunities</li>
                  <li>• Get detailed technical documentation</li>
                  <li>• Understand project architecture and decisions</li>
                  <li>• Explore licensing and usage terms</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContactOwner}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              <i className="bx bx-chat text-lg group-hover:scale-110 transition-transform"></i>
              <span>Contact Owner</span>
            </button>
            
            <button
              onClick={handleBackToProjects}
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl font-semibold transition-all duration-300 group"
            >
              <i className="bx bx-arrow-back text-lg group-hover:scale-110 transition-transform"></i>
              <span>Back to Projects</span>
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Professional inquiries and collaboration requests are always welcome
          </p>
        </div>
      </div>
    </div>
  )
}

export default SourceCode