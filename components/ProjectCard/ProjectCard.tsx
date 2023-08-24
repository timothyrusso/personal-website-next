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
    <li>
      <a href={link} target="_blank">
        <h2>{title}</h2>
        <p>{description}</p>
      </a>
    </li>
  );
};
