import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import projects from '../data/projects'
import './ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) return <div>Project not found</div>

  return (
    <div className="project-detail">
      <button onClick={() => navigate('/projects')} className="back-button">
        ← Back to Projects
      </button>
      
      <div className="detail-content">
        <img src={project.image} alt={project.title} className="detail-image" />
        <h1>{project.title}</h1>
        <p className="detail-description">{project.description}</p>
        
        <div className="detail-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              View GitHub
            </a>
          )}
          {project.demo && (
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