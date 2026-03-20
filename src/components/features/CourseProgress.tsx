import React from 'react';
import { Progress } from '../ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface CourseProgressProps {}

export const CourseProgress: React.FC<CourseProgressProps> = () => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">42%</div>
        <Progress value={42} className="mt-2" />
        <p className="mt-2 text-xs text-muted-foreground">5 of 12 chapters completed</p>
      </CardContent>
    </Card>
  );
};