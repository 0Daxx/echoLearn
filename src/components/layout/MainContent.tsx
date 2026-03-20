import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ChapterContent } from '../features/ChapterContent';
import { PracticeSheet } from '../features/PracticeSheet';
import { TestSection } from '../features/TestSection';

interface MainContentProps {}

export const MainContent: React.FC<MainContentProps> = () => {
  return (
    <main className="flex flex-1 flex-col">
      <Tabs defaultValue="content" className="flex flex-1 flex-col">
        <TabsList className="grid w-full grid-cols-3 border-b">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="test">Test</TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="flex-1 overflow-y-auto p-6 focus:outline-none">
          <ChapterContent />
        </TabsContent>
        <TabsContent value="practice" className="flex-1 overflow-y-auto p-6 focus:outline-none">
          <PracticeSheet />
        </TabsContent>
        <TabsContent value="test" className="flex-1 overflow-y-auto p-6 focus:outline-none">
          <TestSection />
        </TabsContent>
      </Tabs>
    </main>
  );
};