import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../data/projects';

type CarouselProps = {
    projects: Project[];
};

const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    return (
        <div className="carousel-container" id="projects">
            <div className="carousel">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;