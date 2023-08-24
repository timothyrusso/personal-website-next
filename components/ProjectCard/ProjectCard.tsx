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
    <li className="flex justify-start flex-col text-xl border-2 px-5 rounded-xl">
      <a href={link} target="_blank">
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </li>
  );
};
