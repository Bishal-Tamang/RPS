import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Play from './component/Play';
import Game from './component/Game';
import Footer from './component/Footer';
import { useState, useEffect } from 'react';

const App = () => {

  const [myChoice, setMyChoice] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    console.log('Current Choice: ', myChoice);
  }, [myChoice]);

  return (
    <>
      <div className="flex flex-col items-center justify-center text-white mx-4">
        <Header score={score} />

        <Routes>
          <Route
            index
            path='/'
            element={
              <Play setMyChoice={setMyChoice} />
            }
          />
          <Route
            path='/game'
            element={
              <Game myChoice={myChoice} setMyChoice={setMyChoice} score={score} setScore={setScore} />
            }
          />

        </Routes>

        <Footer />
      </div>
    </>
  );
};

export default App;
