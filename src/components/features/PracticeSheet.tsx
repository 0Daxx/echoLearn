import React, { useState } from 'react';
import { TaskItem } from './TaskItem';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { useAppContext } from '../../state/AppContext';

export const PracticeSheet: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { course, currentChapterId, completedTasks } = useAppContext().state;
  
  const currentChapter = course.chapters.find(ch => ch.id === currentChapterId);

  if (!currentChapter || currentChapter.practiceSheets.length === 0) {
    return <div>No practice sheets available for this chapter.</div>;
  }

  const handleTaskComplete = (taskId: string) => {
    dispatch({ type: 'COMPLETE_TASK', payload: taskId });
  };

  const handleGetHint = (taskId: string) => {
    // We will implement the AI logic here in a later phase
    console.log(`Requesting hint for task: ${taskId}`);
    alert("AI Hint feature coming in Phase 5!");
  };
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue={currentChapter.practiceSheets[0].id}>
        <TabsList>
          {currentChapter.practiceSheets.map((sheet) => (
            <TabsTrigger key={sheet.id} value={sheet.id}>
              Sheet {sheet.sheetNumber}
            </TabsTrigger>
          ))}
        </TabsList>
        {currentChapter.practiceSheets.map((sheet) => {
          const completedCount = sheet.tasks.filter(task => completedTasks.includes(task.id)).length;
          return (
            <TabsContent key={sheet.id} value={sheet.id} className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Practice Sheet {sheet.sheetNumber}</CardTitle>
                    <Badge variant="secondary">{completedCount} / {sheet.tasks.length} Tasks</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sheet.tasks.map((task) => (
                    <TaskItem
                      key={task.id}
                      id={task.id}
                      description={task.description}
                      completed={completedTasks.includes(task.id)}
                      onComplete={() => handleTaskComplete(task.id)}
                      onGetHint={() => handleGetHint(task.id)}
                    />
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};