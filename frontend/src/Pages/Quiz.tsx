import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from '../Components/ProgressBar';
import styles from './Quiz.module.scss';
import { RootState } from '../Redux/configureStore';
import {
  nextQuestion,
  previousQuestion,
  selectAnswer,
} from '../Redux/quizSlice';
import { AnswerOption, SelectedAnswer } from '../Models';

export const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentIndexOfQuestion, selectedAnswers } = useSelector(
    (store: RootState) => store.quiz
  );
  console.log("🚀 ~ Quiz ~ selectedAnswers:", selectedAnswers)
  console.log("🚀 ~ Quiz ~ currentIndexOfQuestion:", currentIndexOfQuestion)

  const currentQuestion = questions[currentIndexOfQuestion];
  const isLast = selectedAnswers.length === questions.length;
  console.log("🚀 ~ Quiz ~ isLast:", isLast)

  const handleOptionChange = (questionId: number, selectedAnswer: AnswerOption) => {
    dispatch(
      selectAnswer(
        {
          questionId: questionId,
          selectedAnswer: { id: selectedAnswer.id, answer: selectedAnswer } as SelectedAnswer
        }
      ));
  };

  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleShowResult = () => {
    console.log('Show result');
    // dispatch(nextQuestion());
  };



  // if (isLast && selectedAnswers[currentQuestion.id]) {
  //   return <Result />;
  // }

  return (
    <>
      <ProgressBar />

      <div>
        <h4>{currentQuestion.questionText}</h4>
        {currentQuestion.answerOptions.map((answerOption, i) => (
          <div key={i}>
            <input
              type='radio'
              id={`option-${currentQuestion.id}-${i}`}
              name={`question-${currentQuestion.id}`}
              value={answerOption.text}
              checked={selectedAnswers.length > 0 && selectedAnswers[currentQuestion.id].answer.id === answerOption.id}
              onChange={() => handleOptionChange(currentQuestion.id, answerOption)}
            />
            <label htmlFor={`option-${currentQuestion.id}-${i}`}>
              {answerOption.text}
            </label>
          </div>
        ))}
      </div>

      <div>
        <button
          className={styles.previousBtn}
          onClick={handlePreviousQuestion}
          disabled={currentIndexOfQuestion === 1}
        >
          Föregående
        </button>

        {(isLast) ?
          <button className={styles.nextBtn}
            onClick={handleShowResult}>Visa resultat</button>
          :
          <button className={styles.nextBtn}
            onClick={handleNextQuestion}>Nästa</button>
        }

      </div>
    </>
  );
};
