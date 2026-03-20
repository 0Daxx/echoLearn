import React from 'react';
import { ChapterItem } from './ChapterItem';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { useAppContext } from '../../state/AppContext';

export const ChapterList: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { course, currentChapterId, completedTasks } = state;

  const handleChapterSelect = (chapterId: string) => {
    dispatch({ type: 'SET_CURRENT_CHAPTER', payload: chapterId });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{course.title}</CardTitle>
      </CardHeader>
      <div className="space-y-1 p-4 pt-0">
        {course.chapters.map((chapter) => {
          const chapterTasks = chapter.practiceSheets.flatMap(sheet => sheet.tasks);
          const isChapterCompleted = chapterTasks.every(task => completedTasks.includes(task.id));

          return (
            <ChapterItem
              key={chapter.id}
              id={chapter.id}
              title={chapter.title}
              completed={isChapterCompleted}
              current={chapter.id === currentChapterId}
              onClick={() => handleChapterSelect(chapter.id)}
            />
          );
        })}
      </div>
    </Card>
  );
};