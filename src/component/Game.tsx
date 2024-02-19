import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Paper from '../assets/images/icon-paper.svg';
import Rock from '../assets/images/icon-rock.svg';
import Scissors from '../assets/images/icon-scissors.svg';


interface GameProps {
  myChoice: string,
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setMyChoice: React.Dispatch<React.SetStateAction<string>>,
}

const Game = ({ myChoice, score, setScore, setMyChoice }: GameProps) => {

  const [bishalChoice, setBishalChoice] = useState<string>("");
  const [playerWin, setPlayerWin] = useState<string>("");

  const newBishalPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setBishalChoice(choices[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    newBishalPick();
  }, []);

  const Result = () => {
    const win = "win";
    const lose = "lose";
    const draw = "draw";

    const result =
      (myChoice === "rock" && bishalChoice === "scissors") ||
        (myChoice === "scissors" && bishalChoice === "paper") ||
        (myChoice === "paper" && bishalChoice === "rock")
        ? win
        : (myChoice === "rock" && bishalChoice === "paper") ||
          (myChoice === "scissors" && bishalChoice === "rock") ||
          (myChoice === "paper" && bishalChoice === "scissors")
          ? lose
          : draw;

    setPlayerWin(result);

    if (result === win) {
      setScore(score + 1);
    } else if (result === lose) {
      setScore(score - 1);
    }
  };

  useEffect(() => {
    Result();
  }, [bishalChoice]);

  return (
    <div className='game flex mt-12 flex-nowrap items-center'>
      <div className="game__you flex flex-col">
        <span className="text uppercase text-2xl mb-10 font-barlow">
          You Picked
        </span>
        <div
          className="icon icon--paper h-60 w-60 rounded-full border-solid border-[25px]"
          style={{
            backgroundImage: `${myChoice === 'rock' ? `url(${Rock})` : myChoice === 'paper' ? `url(${Paper})` : `url(${Scissors})`}`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
        </div>

      </div>

      {playerWin === 'win' ? (
        <div className="result_play">
          <span className="text">You Win</span>
          <Link
            to='/'
            className='play-again'
            onClick={() => setBishalChoice("")}
          >
            Play Again
          </Link>
        </div>
      ) : playerWin === 'lose' ? (
        <div className="result_play flex flex-col mx-8">
          <span className="text uppercase text-5xl mb-2">You Lost</span>
          <Link
            to='/'
            className='play-again bg-white uppercase py-2 px-4 rounded-md text-sm text-black'
            onClick={() => setBishalChoice("")}
          >
            Play Again
          </Link>
        </div>
      ) : playerWin === 'draw' ? (
        <div className="result_play">
          <span className="text">Draw</span>
          <Link
            to='/'
            className='play-again'
            onClick={() => setBishalChoice("")}
          >
            Play Again
          </Link>
        </div>
      ) : null}

      <div className="game__house flex flex-col">
        <span className="text uppercase text-2xl mb-10 font-barlow">
          Bishal Picked
        </span>
        <div
          className="icon icon--paper h-60 w-60 rounded-full border-solid border-[25px]"
          style={{
            backgroundImage: `${bishalChoice === 'rock' ? `url(${Rock})` : bishalChoice === 'paper' ? `url(${Paper})` : `url(${Scissors})`}`,
            backgroundSize: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
        </div>

      </div>

    </div>
  )
}

export default Game


// MyChoie: {myChoice} <br />
// Bishal's Choice: {bishalChoice} <br />

// Result:

