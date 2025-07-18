import React from 'react';
import clsx from 'clsx';

type HeadingTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface TextProps {
  as?: HeadingTagType; // Defaults to h1 or p
  text: string;
  className?: string;
  variant?: 'title' | 'subtitle' | 'body' | 'caption';
}

export const TextComponent: React.FC<TextProps> = ({
  as: Tag = 'p',
  text,
  className,
  variant = 'body'
}) => {
  const variants = {
    title: 'text-3xl font-bold',
    subtitle: 'text-xl font-semibold',
    body: 'text-base',
    caption: 'text-sm text-gray-500',
  };

  return (
    <Tag className={clsx(variants[variant], className)}>
      {text}
    </Tag>
  );
};