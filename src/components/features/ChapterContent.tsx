import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

interface ChapterContentProps {}

export const ChapterContent: React.FC<ChapterContentProps> = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Chapter 6: Lists and Keys</CardTitle>
        </CardHeader>
        <CardContent className="prose prose-zinc max-w-none">
          <p>
            In React, you can render lists of elements using the JavaScript `map()` method. When you create a list, each
            item needs a unique "key" prop.
          </p>
          <h4>Key Concepts:</h4>
          <ul>
            <li><strong>Rendering Lists:</strong> Use `.map()` to transform an array of data into an array of elements.</li>
            <li><strong>Keys:</strong> Keys help React identify which items have changed, are added, or are removed, giving it a stable identity.</li>
            <li><strong>Using Index as Key:</strong> Can be used as a last resort if items have no stable IDs, but it can cause issues if the order of items changes.</li>
          </ul>
          <Separator className="my-4" />
          <h4>Example Code:</h4>
          <pre>
            <code>{`const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);`}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
};