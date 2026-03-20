import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { useAppContext } from '../../state/AppContext';
import { Button } from '../ui/button';
import { Bot } from 'lucide-react';

export const AIAssistant: React.FC = () => {
  const { state, dispatch } = useAppContext();
  const { ai } = state;
  const { isOpen, messages, isLoading } = ai;

  const handleClose = () => dispatch({ type: 'TOGGLE_AI_ASSISTANT' });
  
  const handleSendMessage = (message: string) => {
    dispatch({ type: 'ADD_AI_MESSAGE', payload: { text: message, isUser: true } });
    // In a real app, you'd dispatch an action to trigger the AI call here.
    // For now, we'll simulate it in ChatInput.
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="flex h-[80vh] max-w-2xl flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            AI Tutor
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-1 flex-col space-y-4 overflow-hidden">
          <div className="flex-1 overflow-y-auto pr-2">
            {messages.length === 0 && !isLoading && (
              <p className="text-center text-muted-foreground">Hi! I'm your AI tutor. Ask me for a hint on any task!</p>
            )}
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg.text} isUser={msg.isUser} />
            ))}
            {isLoading && <p className="text-muted-foreground">AI is thinking...</p>}
          </div>
          <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
        </div>
      </DialogContent>
    </Dialog>
  );
};