import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import VideoBackground from './components/VideoBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Contact from './pages/Contact'
import './App.css'

/**
 * ScrollControl component manages scroll behavior across different pages.
 * 
 * - Home page: Disables scrolling on large screens, enables on mid-small screens
 * - Contact page: Disables scrolling on desktop, enables on tablet/mobile
 * - Projects and ProjectDetail pages: Enables scrolling with position restoration
 * - Adds header background and border on scroll for better readability
 * - Responds to window resize for dynamic scroll behavior
 * 
 * @param {Object} children - Child components to render
 * @returns {JSX.Element} Rendered children with applied scroll behavior
 */
function ScrollControl({ children }) {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    const updateScrollBehavior = () => {
      const header = document.querySelector('.header');
      const isMobile = window.innerWidth <= 1024;
      const isMediumOrSmaller = window.innerWidth <= 900;

      if (location.pathname === "/" && !isMediumOrSmaller) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
        if (header) {
          header.classList.remove('scrolled');
        }
      } else if (location.pathname === "/contact" && !isMobile) {
        document.body.style.height = "100vh";
        document.body.style.overflow = "hidden";
        if (header) {
          header.classList.remove('scrolled');
        }
      } else {
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
        window.addEventListener('scroll', handleScroll);
        handleScroll();
      }
    };

    // Run on mount and location change
    updateScrollBehavior();

    // Add resize listener
    window.addEventListener('resize', updateScrollBehavior);
    
    // Restore scroll position when returning to Projects page
    if (location.pathname === "/projects" && location.state?.scrollPosition !== undefined) {
      setTimeout(() => window.scrollTo(0, location.state.scrollPosition), 50);
    } else {
      window.scrollTo(0, 0);
    }

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollBehavior);
    };
  }, [location]);

  return children;
}

function App() {
  return (
    <Router>
      <ScrollControl>
        <div className="App">
          <VideoBackground />
          <header className="header">
            <div className="logo-section">
              <h1 className="logo">Mario Flores</h1>
              <h4 className="subtitle">Software Engineer</h4>
            </div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </header>

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </ScrollControl>
    </Router>
  );
}

export default App;