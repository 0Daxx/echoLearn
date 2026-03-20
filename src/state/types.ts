// --- Types ---
export interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export interface PracticeSheet {
  id: string;
  sheetNumber: number;
  tasks: Task[];
}

export interface Chapter {
  id: string;
  title: string;
  notes: string;
  concepts: Array<{ title: string; explanation: string }>;
  practiceSheets: PracticeSheet[];
  test: Test;
}

export interface Test {
  id: string;
  questions: Array<{
    id: string;
    question: string;
    options: string[];
  }>;
}

export interface Course {
  id: string;
  title: string;
  chapters: Chapter[];
}

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

// --- State Shape ---
export interface AppState {
  user: User;
  course: Course;
  currentChapterId: string | null;
  currentPracticeSheetId: string | null;
  completedTasks: string[]; // Store IDs of completed tasks
  testAnswers: Record<string, string>; // { questionId: answer }
}

// --- Actions for useReducer ---
export type AppAction =
  | { type: 'SET_CURRENT_CHAPTER'; payload: string }
  | { type: 'SET_CURRENT_PRACTICE_SHEET'; payload: string }
  | { type: 'COMPLETE_TASK'; payload: string } // task id
  | { type: 'ANSWER_TEST_QUESTION'; payload: { questionId: string; answer: string } }
  | { type: 'RESET_TEST_ANSWERS' };