import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './Pages/Home';
import { Quiz } from './Pages/Quiz';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
      </Routes>
    </>
  );
}

export default App;
