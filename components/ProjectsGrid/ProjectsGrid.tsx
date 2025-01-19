import { sideProjects, professionalProjects } from '@/utils/constants';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectsGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-7 mt-16">Projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
        {professionalProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-7 mt-7">Side projects</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {sideProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </ul>
      <div className="text-base font-medium mt-4">
        More projects available on my{' '}
        <span className="underline">
          <a
            className="gradient-text-hover font-bold"
            href="https://github.com/timothyrusso"
            target="_blank"
          >
            GitHub
          </a>
        </span>{' '}
        profile.
      </div>
    </div>
  );
};
