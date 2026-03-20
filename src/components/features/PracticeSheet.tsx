import React from 'react';
import { TaskItem } from './TaskItem';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

// Hardcoded data
const tasks = [
  { id: 't1', description: 'Create a simple list component that renders an array of strings.', completed: true },
  { id: 't2', description: 'Add a unique key to each list item using the string itself.', completed: true },
  { id: 't3', description: 'Modify the component to accept an array of objects with `id` and `text` properties.', completed: false },
];

interface PracticeSheetProps {}

export const PracticeSheet: React.FC<PracticeSheetProps> = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Practice Sheet 1</CardTitle>
            <Badge variant="secondary">3 / 15 Tasks</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              description={task.description}
              completed={task.completed}
              onComplete={() => console.log(`Task ${task.id} completed`)}
              onGetHint={() => console.log(`Hint for ${task.id}`)}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};