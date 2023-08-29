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
    <li className="flex justify-start flex-col text-xl font-medium px-5 rounded-xl min-h-project-card bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 gradient-background-hover">
      <a href={link} target="_blank">
        <h2 className="mb-3 mt-3 underline">{title}</h2>
        <p className="mb-3 text-base">{description}</p>
      </a>
    </li>
  );
};
