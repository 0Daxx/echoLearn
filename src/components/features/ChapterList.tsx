import React, { Key } from 'react';
import { ChapterItem } from './ChapterItem';
import { Card, CardHeader, CardTitle } from '../ui/card';

// Hardcoded data for now
const chapters = [
  { id: '1', title: 'Chapter 1: Introduction to React', completed: true, current: false },
  { id: '2', title: 'Chapter 2: Components and Props', completed: true, current: false },
  { id: '3', title: 'Chapter 3: State and Lifecycle', completed: true, current: false },
  { id: '4', title: 'Chapter 4: Handling Events', completed: true, current: false },
  { id: '5', title: 'Chapter 5: Conditional Rendering', completed: true, current: false },
  { id: '6', title: 'Chapter 6: Lists and Keys', completed: false, current: true },
  { id: '7', title: 'Chapter 7: Forms', completed: false, current: false },
];

interface ChapterListProps {}

export const ChapterList: React.FC<ChapterListProps> = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Course Syllabus</CardTitle>
      </CardHeader>
      <div className="space-y-1 p-4 pt-0">
        {chapters.map((chapter) => (
          <ChapterItem key={chapter.id} {...chapter} onClick={() => console.log(`Chapter ${chapter.id} clicked`)} />
        ))}
      </div>
    </Card>
  );
};
