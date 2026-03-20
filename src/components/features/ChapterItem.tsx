import React from 'react';
import { Button } from '../ui/button';
import { CheckCircle2, Circle, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming shadcn's utils file is here

interface ChapterItemProps {
  id: string;
  title: string;
  completed: boolean;
  current: boolean;
  onClick: () => void;
}

export const ChapterItem: React.FC<ChapterItemProps> = ({ title, completed, current, onClick }) => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "w-full justify-start gap-2 p-3 h-auto",
        current && "bg-muted font-semibold"
      )}
      onClick={onClick}
    >
      {completed && <CheckCircle2 className="h-5 w-5 text-green-600" />}
      {current && !completed && <PlayCircle className="h-5 w-5 text-primary" />}
      {!completed && !current && <Circle className="h-5 w-5 text-muted-foreground" />}
      <span className="truncate">{title}</span>
    </Button>
  );
};