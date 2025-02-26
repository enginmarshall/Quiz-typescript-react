import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, AnswerOption, Profession, SelectedAnswer } from '../Models';

export interface QuizState {
  questions: Array<Question>;
  currentIndexOfQuestion: number;
  selectedAnswers: Array<SelectedAnswer>;
}

const questions: Array<Question> = [
  {
    id: 1,
    questionText: '1. What type of work environment do you prefer?',
    answerOptions: [
      {
        id: 1,
        text: 'Working with technology and machinery.',
        professions: [
          { name: 'Automation Electrician', score: 1 } as Profession,
          { name: 'Industrial Electrician', score: 1 } as Profession,
        ],
      } as AnswerOption,
      {
        id: 2,
        text: 'Leading teams and managing projects.',
        professions: [
          { name: 'Project Manager', score: 1 } as Profession,
          { name: 'Supervisor', score: 1 } as Profession,
        ] as Array<Profession>,
      } as AnswerOption,
      {
        id: 3,
        text: 'Designing and constructing electrical systems.',
        professions: [
          { name: 'Electrical Designer', score: 1 } as Profession,
          { name: 'Construction Electrician', score: 1 } as Profession,
        ] as Array<Profession>,
      } as AnswerOption,

      {
        id: 4,
        text: 'Sales and communication with clients.',
        professions: [
          { name: 'Technical Sales', score: 1 } as Profession,
          { name: 'Project Sales', score: 1 } as Profession,
        ] as Array<Profession>,
      } as AnswerOption,


    ] as Array<AnswerOption>
  } as Question,
  {
    id: 2,
    questionText: '2. What motivates you the most in a job?',
    answerOptions: [
      {
        id: 5,
        text: 'Practical and hands-on work.',
        professions: [
          { name: 'Service Electrician', score: 1 } as Profession,
          { name: 'Installation Electrician', score: 1 } as Profession,
        ],
      } as AnswerOption,
      {
        id: 6,
        text: 'Opportunities to innovate and create.',
        professions: [
          { name: 'Entrepreneur', score: 1 } as Profession,
          { name: 'Solar Installer', score: 1 } as Profession
        ] as Array<Profession>,
      } as AnswerOption,
      {
        id: 7,
        text: 'Solving complex technical problems.',
        professions: [
          { name: 'Alarm/Security Technician', score: 1 } as Profession,
          { name: 'Elevator Technician', score: 1 } as Profession
        ] as Array<Profession>,
      } as AnswerOption,

      {
        id: 8,
        text: 'Teaching and sharing knowledge.',
        professions: [
          { name: 'Vocational Teacher', score: 1 } as Profession
        ] as Array<Profession>,
      } as AnswerOption,
    ] as Array<AnswerOption>
  } as Question,
  {
    id: 3,
    questionText: '3. How do you handle responsibility?',
    answerOptions: [
      {
        id: 9,
        text: 'Taking the lead and making decisions.',
        professions: [
          { name: 'CEO', score: 1 } as Profession,
          { name: 'Division Manager', score: 1 } as Profession
        ],
      } as AnswerOption,
      {
        id: 10,
        text: 'Managing financial aspects of projects.',
        professions: [
          { name: 'Estimator', score: 1 } as Profession
        ] as Array<Profession>,
      } as AnswerOption,
      {
        id: 11,
        text: 'Ensuring safety and compliance.',
        professions: [
          { name: 'Alarm/Security Technician', score: 1 } as Profession,
          { name: 'Project Manager', score: 1 } as Profession
        ] as Array<Profession>,
      } as AnswerOption,

      {
        id: 14,
        text: 'Working independently and managing my own business.',
        professions: [
          { name: 'Entrepreneur', score: 1 } as Profession
        ] as Array<Profession>,
      } as AnswerOption,
    ] as Array<AnswerOption>
  } as Question



]

const initialState: QuizState = {
  questions: questions,
  currentIndexOfQuestion: 0,
  selectedAnswers: Array<SelectedAnswer>(),
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
      action: PayloadAction<{ questionId: number; selectedAnswer: SelectedAnswer }>
    ) => {
      // 这里使用了 解构赋值，从 action.payload 中提取出 questionId 和 answerText。
      const { questionId, selectedAnswer } = action.payload;
      console.log(action.payload);
      state.selectedAnswers[questionId] = selectedAnswer;
    },
    resetQuiz: (state) => {
      state.selectedAnswers = Array<SelectedAnswer>();
      state.currentIndexOfQuestion = 0;
    },
  },
});

export const { nextQuestion, previousQuestion, selectAnswer, resetQuiz } =
  quizSlice.actions;

export default quizSlice.reducer;
