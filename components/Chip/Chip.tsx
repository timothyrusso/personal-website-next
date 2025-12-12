import { FC } from 'react';

interface ChipProps {
  label: string;
}

export const Chip: FC<ChipProps> = ({ label }) => {
  return (
    <div className="rounded-xl border-2 border-white flex items-center px-2 text-xs h-8 font-bold">
      {label}
    </div>
  );
};
