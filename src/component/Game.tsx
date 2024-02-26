import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import Paper from '../../public/assets/images/icon-paper.svg';
// import Rock from '../../public/assets/images/icon-rock.svg';
// import Scissors from '../../public/assets/images/icon-scissors.svg';

import Paper from '../assets/image/paperSS.png';
import Rock from '../assets/image/RockSS.png';
import Scissors from '../assets/image/ScissorSS.png';


interface GameProps {
  myChoice: string,
  score: number,
  setScore: React.Dispatch<React.SetStateAction<number>>,
  setMyChoice: React.Dispatch<React.SetStateAction<string>>,
}

const Game = ({ myChoice, score, setScore }: GameProps) => {

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
  }, [bishalChoice, myChoice]);

  return (
    <>
      <div className='flex mt-6 md:mt-12 flex-nowrap md:items-center gap-12 md:gap-0 mb-4 md:mb-12'>
        <div className="flex flex-col">
          <span className="text uppercase text-2xl mb-4 md:mb-10 font-barlow text-center">
            You Picked
          </span>
          <div
            className={`h-36 w-36 md:h-60 md:w-60 rounded-full border-solid border-8 bg-white ${myChoice === 'rock' ? 'border-rockGradient' : myChoice === 'paper' ? 'border-paperGradient' : 'border-scissorsGradient'}`}
            style={{
              backgroundImage: `${myChoice === 'rock' ? `url(${Rock})` : myChoice === 'paper' ? `url(${Paper})` : `url(${Scissors})`}`,
              // backgroundSize: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
          </div>



        </div>

        <div className='hidden md:block'>
          {playerWin === 'win' ? (
            <div className="flex flex-col mx-8">
              <span className="uppercase text-5xl mb-2 font-barlow">You Win</span>
              <Link
                to='/'
                className='bg-white uppercase py-2 px-4 rounded-md text-sm text-gray-500 font-bold text-center font-barlow  shadow-md shadow-gray-400 hover:text-red-500 cursor-pointer duration-300'
                onClick={() => setBishalChoice("")}
              >
                Play Again
              </Link>
            </div>
          ) : playerWin === 'lose' ? (
            <div className="flex flex-col mx-8">
              <span className="text uppercase text-5xl mb-2 font-barlow ">You Lost</span>
              <Link
                to='/'
                className='bg-white uppercase py-2 px-4 rounded-md text-sm text-center text-gray-500 font-bold shadow-md shadow-gray-400 hover:text-red-500 cursor-pointer duration-300'
                onClick={() => setBishalChoice("")}
              >
                Play Again
              </Link>
            </div>
          ) : playerWin === 'draw' ? (
            <div className="flex flex-col mx-8">
              <span className="uppercase text-5xl mb-2 font-barlow">Draw</span>
              <Link
                to='/'
                className='bg-white uppercase py-2 px-4 rounded-md text-sm text-center text-gray-500 font-bold shadow-md shadow-gray-400 hover:text-red-500 cursor-pointer duration-300'
                onClick={() => setBishalChoice("")}
              >
                Play Again
              </Link>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <span className="text uppercase text-2xl mb-4 md:mb-10 font-barlow text-center">
            Bishal Picked
          </span>
          <div
            // className="icon icon--paper h-60 w-60 rounded-full border-solid border-8 bg-white"
            className={`h-36 w-36 md:h-60 md:w-60 border-solid rounded-full border-8 bg-white ${bishalChoice === 'rock' ? 'border-rockGradient' : bishalChoice === 'paper' ? 'border-paperGradient' : 'border-scissorsGradient'}`}
            style={{
              backgroundImage: `${bishalChoice === 'rock' ? `url(${Rock})` : bishalChoice === 'paper' ? `url(${Paper})` : `url(${Scissors})`}`,
              // backgroundSize: '50%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
          </div>

        </div>

      </div>

      <div className='md:hidden'>
        {playerWin === 'win' ? (
          <div className="flex flex-col mx-8">
            <span className="uppercase text-5xl mb-2 font-barlow">You Win</span>
            <Link
              to='/'
              className='bg-white uppercase py-2 px-4 rounded-md text-sm text-gray-500 font-bold text-center font-barlow  shadow-md shadow-gray-400 hover:text-red-500 cursor-pointer duration-300'
              onClick={() => setBishalChoice("")}
            >
              Play Again
            </Link>
          </div>
        ) : playerWin === 'lose' ? (
          <div className="flex flex-col mx-8">
            <span className="text uppercase text-5xl mb-2 font-barlow ">You Lost</span>
            <Link
              to='/'
              className='bg-white uppercase py-2 px-4 rounded-md text-sm text-center text-gray-500 font-bold shadow-md shadow-gray-400 hover:text-red-500 cursor-pointer duration-300'
              onClick={() => setBishalChoice("")}
            >
              Play Again
            </Link>
          </div>
        ) : playerWin === 'draw' ? (
          <div className="flex flex-col mx-8">
            <span className="uppercase text-5xl mb-2 font-barlow">Draw</span>
            <Link
              to='/'
              className='bg-white uppercase py-2 px-4 rounded-md text-sm text-center text-gray-500 font-bold shadow-md shadow-gray-400 hover:text-red-500 cursor-pointer duration-300'
              onClick={() => setBishalChoice("")}
            >
              Play Again
            </Link>
          </div>
        ) : null}
      </div>
    </>
  )
}

export default Game