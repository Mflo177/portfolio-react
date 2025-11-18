import React from "react";

const ProjectCard = ({ project }) => {
    return (
        <a className="project-card-link" href={project.github} target="_blank" rel="noopener noreferrer">
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

                        <div>
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;