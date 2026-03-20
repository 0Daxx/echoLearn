import React from 'react';
import { CourseProgress } from '../features/CourseProgress';
import { ChapterList } from '../features/ChapterList';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="flex h-full w-80 flex-col border-r bg-muted/30">
      <div className="p-6">
        <CourseProgress />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <ChapterList />
      </div>
    </aside>
  );
};