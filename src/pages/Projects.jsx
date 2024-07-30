// src/pages/Projects.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Projects.css';
import projects from './projectsData'; // Ensure the path is correct

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="projects-page">
      <h2 className="projects-heading">{project.title}</h2>
      <div className="project-detail-container">
        <img src={project.image} alt={project.title} className="project-detail-image" />
        <div className="project-detail-info">
          <p>{project.description}</p>
          <p>Skills: {project.skills.join(', ')}</p>
          <p>Roles: {project.roles}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-heading">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div id={project.id} key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <p className="project-roles">Roles: {project.roles}</p> <br></br>

              <p className="project-skills">Skills: {project.skills.join(', ')}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Projects, ProjectDetail };
