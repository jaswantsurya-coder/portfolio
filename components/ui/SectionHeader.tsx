import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  centered = false,
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      {/* Accent line */}
      <div className={`mb-4 flex ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="block w-10 h-0.5 bg-primary rounded-full" />
      </div>

      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
        {title}
      </h2>

      {description && (
        <p className={`text-base md:text-lg text-text-muted leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};
