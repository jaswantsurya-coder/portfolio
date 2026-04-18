import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  centered = false
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto opacity-80">
          {description}
        </p>
      )}
    </div>
  );
};
