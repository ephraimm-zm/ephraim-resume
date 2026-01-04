import React, { useState } from 'react';
import type { Project } from '../data/projects';

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, link, comingSoon }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="project-card" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <div className="project-card__header" onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <p className="project-card__eyebrow">Selected work</p>
                    <h3 className="project-title">{title}</h3>
                </div>
                <span className={`project-toggle ${isOpen ? 'open' : ''}`}>▾</span>
            </div>

            <p className="project-description">{description}</p>

            <div className={`tech-details ${isOpen ? 'active' : ''}`}>
                <h4>Stack</h4>
                <div className="pill-row">
                    {technologies.map((tech, index) => (
                        <span className="pill" key={index}>{tech}</span>
                    ))}
                </div>
            </div>

            {link ? (
                <a className="project-link" href={link} target="_blank" rel="noreferrer">
                    View project →
                </a>
            ) : (
                <p className="project-link muted">Live link coming soon</p>
            )}
        </div>
    );
};

export default ProjectCard;