import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Projects.css'
import projects from '../data/projects'


const Projects = () => {
  const navigate = useNavigate()

    const handleCardClick = (projectId) => {
    const scrollPosition = window.scrollY;
    navigate(`/projects/${projectId}`, { state: { fromScrollPosition: scrollPosition } });
  }

  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleCardClick(project.id)}
          >
            <div className="card-content">
              <img
                src={project.image}
                alt={project.title}
                className="project-thumb"
              />

              <div className="card-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Source Code 
                    </a>
                  )}
                  {project.github && project.demo && " | "}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Demo
                    </a>
                  )}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects