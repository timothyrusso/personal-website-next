import { projects } from '@/utils/constants';
import { ProjectCard } from '../ProjectCard/ProjectCard';

export const ProjectsGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-7 mt-7">Projects</h2>
      <ul className="grid grid-cols-1 gap-7">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            link={project.link}
            description={project.description}
          />
        ))}
      </ul>
      <div className="text-lg font-medium mt-4">
        More projects available on my{' '}
        <a
          className="underline"
          href="https://github.com/timothyrusso"
          target="_blank"
        >
          GitHub
        </a>{' '}
        profile.
      </div>
    </div>
  );
};
