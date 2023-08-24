import { projects } from '@/utils/constants';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectsGrid = () => {
  return (
    <div>
      <h2>Projects</h2>
      <ul className="grid grid-cols-2 gap-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </ul>
      <div>
        More projects available on my{' '}
        <a href="https://github.com/timothyrusso" target="_blank">
          GitHub
        </a>{' '}
        profile.
      </div>
    </div>
  );
};
