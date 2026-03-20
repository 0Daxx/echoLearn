import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '../ui/avatar';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
  return (
    <div className={cn("flex gap-3", isUser && "flex-row-reverse")}>
      <Avatar className="h-8 w-8">
        <AvatarFallback>{isUser ? 'U' : 'AI'}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[70%] rounded-lg p-3 text-sm",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted"
        )}
      >
        {message}
      </div>
    </div>
  );
};