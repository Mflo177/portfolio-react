import React, { useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const project = projects.find(p => p.id === parseInt(id))
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return <div>Project not found</div>

  const handleBack = () => {
    const scrollPosition = location.state?.fromScrollPosition || 0;
    navigate('/projects', { state: { scrollPosition } });
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.allImages.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.allImages.length - 1 : prev - 1
    )
  }

  return (
    <div className="project-detail">
      <button onClick={handleBack} className="back-button">
        ‹
      </button>
      
      <div className="detail-content">
        <img src={project.image} alt={project.title} className="detail-image" />
        <h1>{project.title}</h1>
        
      
        {project.technologies && (
          <div className="tech-stack">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        )}
        
        <p className="detail-description">
          {project.longDescription || project.description}
        </p>
        
        {project.videoDemo && (
          <div className="video-container">
            <iframe 
              src={project.videoDemo} 
              title={`${project.title} demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}

        {/* Carousel */}
        {project.allImages && project.allImages.length > 0 && (
          <div className="carousel-section">
            <h2>Screenshots</h2>
            <div className="carousel-container">
              <button className="carousel-arrow carousel-prev" onClick={prevImage}>
                ‹
              </button>
              
              <div className="carousel-content">
                <img 
                  src={project.allImages[currentImageIndex].src} 
                  alt={project.allImages[currentImageIndex].caption}
                  className="carousel-image"
                />
                <p className="carousel-caption">
                  {project.allImages[currentImageIndex].caption}
                </p>
                <p className="carousel-counter">
                  {currentImageIndex + 1} / {project.allImages.length}
                </p>
              </div>
              
              <button className="carousel-arrow carousel-next" onClick={nextImage}>
                ›
              </button>
            </div>
            
            {/* Thumbnail navigation */}
            <div className="carousel-thumbnails">
              {project.allImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`carousel-thumb ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        )}
        
        <div className="detail-links">
          {project.github && project.github !== '#' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              View GitHub
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail