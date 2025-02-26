import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface QuizState {
  questions: {
    id: number;
    question: string;
    option: {
      text: string;
      professionScore: Record<string, number>;
    }[];
  }[];
  currentIndexOfQuestion: number;
  selectedAnswers: string[];
}

const initialState: QuizState = {
  questions: [
    {
      id: 1,
      question: '1. What type of work environment do you prefer?',
      option: [
        {
          text: 'Working with technology and machinery.',
          professionScore: {
            'Automation Electrician': 1,
            'Industrial Electrician': 1,
          },
        },
        {
          text: 'Leading teams and managing projects.',
          professionScore: { 'Project Manager': 1, Supervisor: 1 },
        },
        {
          text: 'Designing and constructing electrical systems.',
          professionScore: {
            'Electrical Designer': 1,
            'Construction Electrician': 1,
          },
        },
        {
          text: 'Sales and communication with clients.',
          professionScore: { 'Technical Sales': 1, 'Project Sales': 1 },
        },
      ],
    },
    {
      id: 2,
      question: '2. What motivates you the most in a job?',
      option: [
        {
          text: 'Practical and hands-on work.',
          professionScore: {
            'Service Electrician': 1,
            'Installation Electrician': 1,
          },
        },
        {
          text: 'Opportunities to innovate and create.',
          professionScore: { Entrepreneur: 1, 'Solar Installer': 1 },
        },
        {
          text: 'Solving complex technical problems.',
          professionScore: {
            'Alarm/Security Technician': 1,
            'Elevator Technician': 1,
          },
        },
        {
          text: 'Teaching and sharing knowledge.',
          professionScore: { 'Vocational Teacher': 1 },
        },
      ],
    },
    {
      id: 3,
      question: '3. How do you handle responsibility?',
      option: [
        {
          text: 'Taking the lead and making decisions.',
          professionScore: { CEO: 1, 'Division Manager': 1 },
        },
        {
          text: 'Managing financial aspects of projects.',
          professionScore: { Estimator: 1 },
        },
        {
          text: 'Ensuring safety and compliance.',
          professionScore: {
            'Alarm/Security Technician': 1,
            'Project Manager': 1,
          },
        },
        {
          text: 'Working independently and managing my own business.',
          professionScore: { Entrepreneur: 1 },
        },
      ],
    },
  ],
  currentIndexOfQuestion: 0,
  selectedAnswers: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.currentIndexOfQuestion < state.questions.length - 1) {
        state.currentIndexOfQuestion += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentIndexOfQuestion > 0) {
        state.currentIndexOfQuestion -= 1;
      }
    },
    selectAnswer: (
      state,
      action: PayloadAction<{ questionId: number; answerText: string }>
    ) => {
      // 这里使用了 解构赋值，从 action.payload 中提取出 questionId 和 answerText。
      const { questionId, answerText } = action.payload;
      console.log(action.payload);
      state.selectedAnswers[questionId] = answerText;
    },
    resetQuiz: (state) => {
      state.selectedAnswers = [];
      state.currentIndexOfQuestion = 0;
    },
  },
});

export const { nextQuestion, previousQuestion, selectAnswer, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
