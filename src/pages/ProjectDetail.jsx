import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) return <div>Project not found</div>

  const handleBack = () => {
    const scrollPosition = location.state?.fromScrollPosition || 0;
    navigate('/projects', { state: { scrollPosition } });
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
        
        {project.images && (
          <div className="detail-gallery">
            {project.images.map((img, index) => (
              <img key={index} src={img} alt={`${project.title} ${index + 1}`} className="gallery-image" />
            ))}
          </div>
        )}
        
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