import { useCallback } from 'react';
import { useAppContext } from '../state/AppContext';
import { generateSocraticHint } from '../services/aiService';

export const useSocraticHint = () => {
  const { state, dispatch } = useAppContext();

  const requestHint = useCallback(
    async (taskDescription: string) => {
      const { course, currentChapterId } = state;
      const currentChapter = course.chapters.find(ch => ch.id === currentChapterId);

      if (!currentChapter) {
        console.error("Cannot get hint, no current chapter selected.");
        return;
      }

      // Open the assistant if it's closed
      if (!state.ai.isOpen) {
        dispatch({ type: 'TOGGLE_AI_ASSISTANT' });
      }

      // Add user's request to the chat
      dispatch({
        type: 'ADD_AI_MESSAGE',
        payload: { text: `Can you give me a hint for this task: "${taskDescription}"?`, isUser: true },
      });
      
      // Set loading state
      dispatch({ type: 'SET_AI_LOADING', payload: true });

      // Call the AI service
      const aiResponse = await generateSocraticHint(taskDescription, {
        title: currentChapter.title,
        notes: currentChapter.notes,
      });

      // Add AI's response to the chat
      dispatch({ type: 'ADD_AI_MESSAGE', payload: { text: aiResponse, isUser: false } });
      
      // Clear loading state
      dispatch({ type: 'SET_AI_LOADING', payload: false });
    },
    [state, dispatch]
  );

  return { requestHint };
};