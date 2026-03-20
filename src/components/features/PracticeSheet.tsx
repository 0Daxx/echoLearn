import React from 'react';
import { TaskItem } from './TaskItem';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useAppContext } from '../../state/AppContext';
import { useSocraticHint } from '../../hooks/useSocraticHint'; // Import the hook

export const PracticeSheet: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { course, currentChapterId, completedTasks } = state;
  const { requestHint } = useSocraticHint(); // Use the hook
  
  const currentChapter = course.chapters.find(ch => ch.id === currentChapterId);
  // ... (rest of the component logic remains the same until the return statement)

  const handleTaskComplete = (taskId: string) => {
    dispatch({ type: 'COMPLETE_TASK', payload: taskId });
  };

  // This function is now simplified
  const handleGetHint = (taskDescription: string) => {
    requestHint(taskDescription);
  };
  
  // ... (the JSX return part is mostly the same, just update the onGetHint prop)
  return (
    <div className="space-y-6">
      {/* ... (Tabs and other JSX) */}
      <CardContent className="space-y-4">
        {sheet.tasks.map((task) => (
          <TaskItem
            key={task.id}
            id={task.id}
            description={task.description}
            completed={completedTasks.includes(task.id)}
            onComplete={() => handleTaskComplete(task.id)}
            onGetHint={() => handleGetHint(task.description)} // Pass the description
          />
        ))}
      </CardContent>
      {/* ... */}
    </div>
  );
};