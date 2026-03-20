import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useAppContext } from '../../state/AppContext';

export const UserProfile: React.FC = () => {
  const { state } = useAppContext();
  const { user } = state;

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">{user.name}</span>
      <Avatar>
        <AvatarImage src={user.avatarUrl} alt={user.name} />
        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
    </div>
  );
};