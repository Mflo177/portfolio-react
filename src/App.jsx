import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import VideoBackground from './components/VideoBackground'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'

function ScrollControl({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      // HOME — disable ALL scrollbars completely
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // PROJECTS — allow normal scrollbar
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
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
            <h1 className="logo">Mario Flores</h1>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
            </nav>
          </header>

          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
        </div>
      </ScrollControl>
    </Router>
  );
}

export default App;