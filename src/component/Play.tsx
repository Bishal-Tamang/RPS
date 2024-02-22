import React from 'react';
import { Link } from 'react-router-dom';
// import Triangle from 'assets/images/bg-triangle.svg';
// import Paper from 'assets/images/icon-paper.svg';
// import Rock from 'assets/images/icon-rock.svg';
// import Scissors from 'assets/images/icon-scissors.svg';

import Triangle from '../../public/assets/images/bg-triangle.svg';
import Paper from '../../public/assets/images/icon-paper.svg';
import Rock from '../../public/assets/images/icon-rock.svg';
import Scissors from '../../public/assets/images/icon-scissors.svg';


interface PlayProps {
  setMyChoice: React.Dispatch<React.SetStateAction<string>>
}

const Play = ({ setMyChoice }: PlayProps) => {
  const setChoice = (choice: string) => {
    setMyChoice(choice);
  }

  return (
    <div className='play w-full relative mt-12 flex flex-col'>
      <img src={Triangle} alt="" className='absolute self-center mt-16' />
      <div className='flex justify-center'>
        <Link to='/game'>
          <div
            className='h-40 w-40 bg-white border-paperGradient border-8 border-solid rounded-full shadow-inner hover:scale-110 duration-300 ease-linear -translate-x-24 md:-translate-x-28'
            style={{
              backgroundImage: `url(${Paper})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => setChoice('paper')}
          >
          </div>

          <div
            className='icon icon--paper h-40 w-40 bg-white border-scissorsGradient border-8 border-solid rounded-full translate-x-24 md:translate-x-28 -translate-y-40 hover:scale-110 duration-300 ease-linear'
            style={{
              backgroundImage: `url(${Scissors})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            onClick={() => setChoice('scissors')}
          >
          </div>

          <div
            className='icon icon--paper h-40 w-40 bg-white border-rockGradient border-8 border-solid rounded-full translate-x-2 -translate-y-20 md:-translate-y-10 hover:scale-110 duration-300 ease-linear'
            onClick={() => setChoice('rock')}
            style={{
              backgroundImage: `url(${Rock})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Play