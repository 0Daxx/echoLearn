import React from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { CheckCircle2, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  id: string;
  description: string;
  completed: boolean;
  onComplete: () => void;
  onGetHint: () => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ description, completed, onComplete, onGetHint }) => {
  return (
    <Card className={cn("p-4", completed && "bg-muted/50")}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <Button
            size="sm"
            variant={completed ? "secondary" : "outline"}
            onClick={onComplete}
            className="mt-0.5"
          >
            <CheckCircle2 className={cn("h-4 w-4", completed && "text-green-600")} />
          </Button>
          <p className={cn("text-sm", completed && "line-through text-muted-foreground")}>
            {description}
          </p>
        </div>
        <Button size="sm" variant="ghost" onClick={onGetHint}>
          <Lightbulb className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};