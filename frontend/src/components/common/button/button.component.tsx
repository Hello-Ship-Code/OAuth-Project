import { FC } from 'react';
import clsx from 'clsx'

import { ButtonProps } from './button.types';

export const ButtonComponent: FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type,
  size,
  variant,
  icon
}) => {
  return (
    <button
      className={clsx('baseButtonClass', variant, size, className)}
      type={type}
      onClick={onClick}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </button>
  );
};