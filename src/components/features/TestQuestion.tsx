import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';

interface TestQuestionProps {
  id: string;
  question: string;
  options: string[];
  onAnswerSelect: (answer: string) => void;
}

export const TestQuestion: React.FC<TestQuestionProps> = ({ question, options, onAnswerSelect }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup onValueChange={onAnswerSelect}>
          {options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`${option}-${index}`} />
              <Label htmlFor={`${option}-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};