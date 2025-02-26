import { useDispatch } from 'react-redux';
import { resetQuiz } from '../Redux/quizSlice';

export const Result = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h1>Result</h1>
      <button onClick={() => dispatch(resetQuiz())}>Gör om quizet!</button>
    </>
  );
};
