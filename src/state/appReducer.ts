import { AppState, AppAction } from './types';

// Helper function to get initial state
const getInitialState = (): AppState => {
  // This is where we would eventually fetch from an API
  const hardCodedCourse: Course = {
    id: 'react-genai-python',
    title: 'Learning Path: React, GenAI, Python',
    chapters: [
      {
        id: 'ch1',
        title: 'Chapter 1: Introduction to React',
        notes: 'React is a JavaScript library for building user interfaces...',
        concepts: [{ title: 'Components', explanation: 'Components let you split the UI into independent, reusable pieces.' }],
        practiceSheets: [
          {
            id: 'ch1-ps1',
            sheetNumber: 1,
            tasks: [
              { id: 'ch1-ps1-t1', description: 'Create a functional component', completed: false },
              { id: 'ch1-ps1-t2', description: 'Pass props to a component', completed: false },
            ],
          },
        ],
        test: {
          id: 'ch1-test',
          questions: [{ id: 'ch1-q1', question: 'What is React?', options: ['A library', 'A framework', 'A database', 'An OS'] }],
        },
      },
      {
        id: 'ch2',
        title: 'Chapter 2: State and Lifecycle',
        notes: 'State allows components to manage and update data over time...',
        concepts: [{ title: 'useState Hook', explanation: 'The useState Hook lets you add React state to function components.' }],
        practiceSheets: [
          {
            id: 'ch2-ps1',
            sheetNumber: 1,
            tasks: [{ id: 'ch2-ps1-t1', description: 'Add a counter using useState', completed: false }],
          },
        ],
        test: { id: 'ch2-test', questions: [{ id: 'ch2-q1', question: 'Which hook manages state?', options: ['useEffect', 'useState', 'useContext', 'useRef'] }] },
      },
    ],
  };

  const hardCodedUser: User = {
    id: 'user1',
    name: 'Jane Doe',
    avatarUrl: 'https://github.com/shadcn.png',
  };

  return {
    user: hardCodedUser,
    course: hardCodedCourse,
    currentChapterId: 'ch1', // Start with the first chapter
    currentPracticeSheetId: null,
    completedTasks: [],
    testAnswers: {},
  };
};

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_CURRENT_CHAPTER':
      return { ...state, currentChapterId: action.payload, currentPracticeSheetId: null };
    case 'SET_CURRENT_PRACTICE_SHEET':
      return { ...state, currentPracticeSheetId: action.payload };
    case 'COMPLETE_TASK':
      const isAlreadyCompleted = state.completedTasks.includes(action.payload);
      if (isAlreadyCompleted) return state; // No change if already completed
      return { ...state, completedTasks: [...state.completedTasks, action.payload] };
    case 'ANSWER_TEST_QUESTION':
      return {
        ...state,
        testAnswers: { ...state.testAnswers, [action.payload.questionId]: action.payload.answer },
      };
    case 'RESET_TEST_ANSWERS':
      return { ...state, testAnswers: {} };
    default:
      return state;
  }
};

// Export the initial state generator
export { getInitialState };