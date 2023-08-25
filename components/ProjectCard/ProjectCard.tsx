import { FC } from 'react';

type PrjectCardProps = {
  title: string;
  link: string;
  description: string;
};

export const ProjectCard: FC<PrjectCardProps> = ({
  title,
  link,
  description,
}) => {
  return (
    <li className="flex justify-start flex-col text-xl font-medium border-2 px-5 rounded-xl min-h-project-card">
      <a href={link} target="_blank">
        <h2 className="mb-3 mt-3 underline">{title}</h2>
        <p className="mb-3">{description}</p>
      </a>
    </li>
  );
};
