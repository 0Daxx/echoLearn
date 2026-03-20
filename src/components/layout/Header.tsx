import React from 'react';
import { Logo } from '../features/Logo';
import { Navigation } from '../features/Navigation';
import { UserProfile } from '../features/UserProfile';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <Logo />
      <Navigation />
      <UserProfile />
    </header>
  );
};