
import type React from 'react';
import './ShinyButton.css';

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ShinyButton({
  children,
  onClick,
  className = '',
}: ShinyButtonProps) {
  return (
    <button
      type="button"
      className={`shiny-cta ${className}`.trim()}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
}
