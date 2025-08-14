import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


// Main App component that holds the entire portfolio website
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Dummy project data for the Projects section
  const projects = [
      {
        id: 1,
        title: 'TalkDocs',
        description: 'TalkDocs is a powerful PDF assistant that allows you to upload multiple PDF documents and chat with them in real-time. It uses RAG (Retrieval-Augmented Generation) to give you precise, context-aware answers.',
        imageUrl: 'https://placehold.co/400x250/2563eb/ffffff?text=Project+1',
        link: 'https://github.com/Arup03NITRR/TalkDocs',
        liveUrl: 'https://talkdocs-app.streamlit.app/',
      },
      {
        id: 2,
        title: 'RasoiMate',
        description: 'RasoiMate is your AI-powered cooking companion. Enter your ingredients and cuisine preference, and it instantly creates a unique, step-by-step recipe—turning whatever’s in your kitchen into something delicious.',
        imageUrl: 'https://placehold.co/400x250/2563eb/ffffff?text=Project+2',
        link: 'https://github.com/Arup03NITRR/RasoiMate',
        liveUrl: 'hhttps://github.com/Arup03NITRR/RasoiMate',
      },
      {
        id: 3,
        title: 'MedAI',
        description: 'MedAI is a smart web app that predicts potential diseases from your symptoms using ML. It provides a detailed report with medications, diet, workout tips, and consultation guidance — all downloadable as a PDF.',
        imageUrl: 'https://placehold.co/400x250/2563eb/ffffff?text=Project+3',
        link: 'https://github.com/Arup03NITRR/MedAI',
        liveUrl: 'https://medaiapp.streamlit.app/', 
      },
    ];

  // Effect to handle scrolling and set the active section in the Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      let currentSection = 'home';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper function to handle smooth scrolling to a section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  return (
    <div className="bg-gray-950 text-gray-100 font-sans leading-relaxed">
      {/* Navbar Component */}
      <nav className="fixed w-full z-20 top-0 bg-gray-950 bg-opacity-80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Arup Paul
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={`text-lg font-medium transition-colors duration-300 ${activeSection === 'about' ? 'text-purple-400' : 'hover:text-blue-400'}`}>About</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className={`text-lg font-medium transition-colors duration-300 ${activeSection === 'projects' ? 'text-purple-400' : 'hover:text-blue-400'}`}>Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className={`text-lg font-medium transition-colors duration-300 ${activeSection === 'contact' ? 'text-purple-400' : 'hover:text-blue-400'}`}>Contact</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none focus:text-blue-400 transition-colors duration-300">
              {/* Hamburger menu icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-900 pb-4 shadow-lg">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block py-2 px-6 text-lg font-medium hover:bg-gray-800 transition-colors duration-200">About</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block py-2 px-6 text-lg font-medium hover:bg-gray-800 transition-colors duration-200">Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block py-2 px-6 text-lg font-medium hover:bg-gray-800 transition-colors duration-200">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="animate-fade-in-up">
          <p className="text-xl md:text-2xl text-blue-300 mb-2">Hello, I'm</p>
          <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">ARUP PAUL</h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 font-light mb-8">MCA Student, NIT Raipur | Aspiring AI & ML Engineer</h2>
          <a href="https://drive.google.com/file/d/1XvmaWdANfr6Vfo9lHJiHbAYihnIbSVwq/view?usp=drive_link" target="_blank" className="inline-block py-3 px-8 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            View My Resume
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src="Profile_Photo_2.png" 
                alt="Your Profile" 
                className="w-60 md:w-90 h-auto shadow-xl transform transition-transform duration-500 hover:scale-105" 
              />
            </div>

            <div className="w-full md:w-1/2 text-lg text-gray-300">
              <p className="mb-6">
                I'm a passionate and results-driven AI/ML enthusiast with a strong foundation in programming, data analysis, and intelligent system design. My journey in technology began with a fascination for how machines can learn from data — and I've been building, experimenting, and innovating ever since.
              </p>

              <p className="mb-6">
                My technical expertise spans multiple areas: <strong>Python</strong>, <strong>C/C++</strong>, <strong>SQL/MySQL</strong>, and <strong>MongoDB</strong> for programming and database management; <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, <strong>Generative AI</strong>, <strong>TensorFlow</strong>, and <strong>Scikit-learn</strong> for intelligent model development; and data processing with <strong>NumPy</strong>, <strong>Pandas</strong>, and <strong>Matplotlib</strong> for <em>data cleaning, exploratory analysis, and visualization</em>.  
                I also work with <strong>LangChain</strong>, <strong>LangGraph</strong>, <strong>RAG applications</strong>, and <strong>Agentic AI</strong> to design advanced conversational and retrieval-based systems. For deployment, I leverage <strong>Streamlit</strong>, <strong>FastAPI</strong>, and <strong>React.js</strong>, alongside version control tools like <strong>Git</strong> and <strong>GitHub</strong>.
              </p>

              <p>
                I thrive in collaborative, problem-solving environments and am committed to writing clean, scalable, and maintainable code. Outside of coding, I enjoy exploring new AI research papers, experimenting with side projects, and diving into tech communities to share ideas and learn from others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 px-4 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-6 text-sm font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300">
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block py-2 px-6 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 px-4 bg-gray-900">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            I'm currently seeking new opportunities. Feel free to reach out to me via email or connect on social media.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arup03.paul@gmail.com" target="_blank" className="inline-block py-3 px-8 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Email Me
          </a>
          <div className="mt-8 flex justify-center space-x-6">
            {/* Social media icons with inline SVGs */}
            <a href="https://github.com/Arup03NITRR/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/arup-paul-963810194/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.instagram.com/arup003/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-950 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Arup Paul. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;