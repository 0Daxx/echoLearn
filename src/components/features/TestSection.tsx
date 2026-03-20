import React from 'react';
import { TestQuestion } from './TestQuestion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

// Hardcoded data
const questions = [
  {
    id: 'q1',
    question: 'What is the primary purpose of the "key" prop in a list?',
    options: ['To style the list item', 'To give React a stable identity for the item', 'To make the item clickable', 'To add a unique ID to the DOM element'],
  },
  {
    id: 'q2',
    question: 'Which method is commonly used to render a list of elements in React?',
    options: ['forEach()', 'map()', 'reduce()', 'filter()'],
  },
];

interface TestSectionProps {}

export const TestSection: React.FC<TestSectionProps> = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Chapter 6: Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {questions.map((q) => (
            <TestQuestion
              key={q.id}
              id={q.id}
              question={q.question}
              options={q.options}
              onAnswerSelect={(answer) => console.log(`Question ${q.id} answered: ${answer}`)}
            />
          ))}
          <Button className="w-full">Submit Test</Button>
        </CardContent>
      </Card>
    </div>
  );
};