import React from 'react';
import { Button } from '../ui/button';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="flex gap-4">
      <Button variant="ghost">Dashboard</Button>
      <Button variant="ghost">My Courses</Button>
      <Button variant="ghost">Community</Button>
    </nav>
  );
};