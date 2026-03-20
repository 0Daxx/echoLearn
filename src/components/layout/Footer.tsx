import React from 'react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex h-12 items-center justify-center border-t px-6">
      <p className="text-xs text-muted-foreground">© 2026 Learning Path Platform. Google Hackathon Winner.</p>
    </footer>
  );
};