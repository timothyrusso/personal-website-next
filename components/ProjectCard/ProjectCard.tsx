import type { FC } from 'react';
import { Chip } from '../Chip/Chip';

type PrjectCardProps = {
  title: string;
  link: string;
  description: string;
  chipLabel?: string;
};

export const ProjectCard: FC<PrjectCardProps> = ({
  title,
  link,
  description,
  chipLabel,
}) => {
  return (
    <li className="flex justify-start flex-col text-xl font-medium px-5 rounded-xl min-h-project-card border-2 gradient-background-hover cursor-pointer">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="flex justify-between mt-3">
          <h2 className="mb-3  underline cursor-pointer">{title}</h2>
          {chipLabel && <Chip label={chipLabel} />}
        </div>
        <p className="mb-3 text-base cursor-pointer">{description}</p>
      </a>
    </li>
  );
};
