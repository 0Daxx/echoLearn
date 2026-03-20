import React from 'react';
import { TestQuestion } from './TestQuestion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { useAppContext } from '../../state/AppContext';

export const TestSection: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { course, currentChapterId, testAnswers } = state;

  const currentChapter = course.chapters.find(ch => ch.id === currentChapterId);
  
  if (!currentChapter) {
    return <div>Please select a chapter to view the test.</div>;
  }

  const handleAnswerSelect = (questionId: string, answer: string) => {
    dispatch({ type: 'ANSWER_TEST_QUESTION', payload: { questionId, answer } });
  };

  const handleSubmitTest = () => {
    alert(`Test Submitted! Answers: ${JSON.stringify(testAnswers, null, 2)}`);
    dispatch({ type: 'RESET_TEST_ANSWERS' });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{currentChapter.title}: Assessment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentChapter.test.questions.map((q) => (
            <TestQuestion
              key={q.id}
              id={q.id}
              question={q.question}
              options={q.options}
              onAnswerSelect={(answer) => handleAnswerSelect(q.id, answer)}
              currentAnswer={testAnswers[q.id]}
            />
          ))}
          <Button className="w-full" onClick={handleSubmitTest}>
            Submit Test
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};