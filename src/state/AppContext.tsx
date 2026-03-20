import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AppState, AppAction } from './types';
import { appReducer, getInitialState } from './appReducer';

// 1. Create the context
const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | null>(null);

// 2. Create the provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, getInitialState());

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

// 3. Create a custom hook for easy consumption
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};