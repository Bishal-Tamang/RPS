interface headerProp {
  score: number,
}

const Header = ({ score }: headerProp) => {
  return (
    <div className='header flex border-[3px] border-solid border-gray-400 max-w-3xl w-full mt-6 rounded-2xl p-5 justify-between'>
      <div className='text text-2xl md:text-4xl uppercase flex flex-col items-start leading-8 font-barlow text-left font-bold'>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </div>
      <div className="score-box py-3 px-10 bg-white text-scoreText rounded-md">
        <span>Score:</span>
        <div className="score-box__score text-darkText text-6xl font-semibold">
          {score}
        </div>
      </div>
    </div>
  )
}

export default Header