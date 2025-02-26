// import { Counter } from '../Components/Counter-test';
import { Link } from 'react-router';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <>
      <h1>Hitta din perfekta elektrikerinriktning!</h1>
      {/* <Counter /> */}
      <h4>
        Svara på 8 noggrant utvalda frågor och upptäck vilken elbransch som pass
        ar dig bäst!
      </h4>
      <Link to='/quiz'>
        <button className={styles.startBtn}>Start Quiz</button>
      </Link>
    </>
  );
};
