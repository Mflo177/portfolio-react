import React from 'react'
import './Projects.css'
import projects from '../data/projects'   


const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="project-list">
        {projects.map(project => (
          <div key={project.id} className="project-card-link">
            <div className="project-card">
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
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )}
                    {" | "}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </a>
                    )}
                  </p>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects