import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { useAppContext } from '../../state/AppContext';

export const ChapterContent: React.FC = () => {
  const { state } = useAppContext();
  const { course, currentChapterId } = state;

  const currentChapter = course.chapters.find(ch => ch.id === currentChapterId);

  if (!currentChapter) {
    return <div>Please select a chapter from the sidebar.</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{currentChapter.title}</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-zinc max-w-none">
          <p>{currentChapter.notes}</p>
          <h4>Key Concepts:</h4>
          <ul>
            {currentChapter.concepts.map((concept, index) => (
              <li key={index}>
                <strong>{concept.title}:</strong> {concept.explanation}
              </li>
            ))}
          </ul>
          <Separator className="my-4" />
          {/* We can add more formatted content here later */}
        </CardContent>
      </Card>
    </div>
  );
};