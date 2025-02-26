import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Redux/configureStore';
import { decrement, increment } from '../Redux/counterSlice';
import { Button } from 'react-bootstrap';
import styles from './Counter.module.scss';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div className='column'>
        <Button
          variant='primary'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span className={styles.count}>{count}</span>
        <Button
          variant='primary'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}
