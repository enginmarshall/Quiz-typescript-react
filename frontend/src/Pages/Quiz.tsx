import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from '../Components/ProgressBar';
import styles from './Quiz.module.scss';
import { RootState } from '../Redux/configureStore';
import {
  nextQuestion,
  previousQuestion,
  selectAnswer,
} from '../Redux/quizSlice';
import { Result } from '../Components/Result';

export const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentIndexOfQuestion, selectedAnswers } = useSelector(
    (store: RootState) => store.quiz
  );

  const currentQuestion = questions[currentIndexOfQuestion];
  const isLast = currentIndexOfQuestion === questions.length - 1;

  const handleOptionChange = (questionId: number, answerText: string) => {
    dispatch(selectAnswer({ questionId, answerText }));
  };

  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  if (isLast && selectedAnswers[currentQuestion.id]) {
    return <Result />;
  }

  return (
    <>
      <ProgressBar />

      <div>
        <h4>{currentQuestion.question}</h4>
        {currentQuestion.option.map((opt, i) => (
          <div key={i}>
            <input
              type='radio'
              id={`option-${currentQuestion.id}-${i}`}
              name={`question-${currentQuestion.id}`}
              value={opt.text}
              checked={selectedAnswers[currentQuestion.id] === opt.text}
              onChange={() => handleOptionChange(currentQuestion.id, opt.text)}
            />
            <label htmlFor={`option-${currentQuestion.id}-${i}`}>
              {opt.text}
            </label>
          </div>
        ))}
      </div>

      <div>
        <button
          className={styles.previousBtn}
          onClick={handlePreviousQuestion}
          disabled={currentIndexOfQuestion === 0}
        >
          Föregående
        </button>

        <button
          className={styles.nextBtn}
          onClick={handleNextQuestion}
          disabled={
            !selectedAnswers[currentQuestion.id] ||
            currentIndexOfQuestion === questions.length - 1
          }
        >
          {isLast ? 'Visa reslutat' : 'Nästa'}
        </button>
      </div>
    </>
  );
};
