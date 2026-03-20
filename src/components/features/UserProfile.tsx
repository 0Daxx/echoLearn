import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
// import { Button } from '../ui/button';

interface UserProfileProps {}

export const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">John Doe</span>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </div>
  );
};