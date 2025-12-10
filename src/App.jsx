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
 * - Home and Contact pages: Disables scrolling (overflow hidden, fixed viewport height)
 * - Projects and ProjectDetail pages: Enables scrolling with position restoration
 * 
 * @param {Object} children - Child components to render
 * @returns {JSX.Element} Rendered children with applied scroll behavior
 */
function ScrollControl({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/contact") {
      document.body.style.height = "100vh";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "visible";
    }
    
    // Restore scroll position when returning to Projects page
    if (location.pathname === "/projects" && location.state?.scrollPosition !== undefined) {
      setTimeout(() => window.scrollTo(0, location.state.scrollPosition), 50);
    } else {
      window.scrollTo(0, 0);
    }
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