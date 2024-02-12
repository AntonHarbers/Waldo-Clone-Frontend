import { Link } from 'react-router-dom';
import FirstImage from '/gameOne/game.webp';

export default function LeaderboardMenu() {
  return (
    <div className=" select-none flex flex-col gap-4 bg-slate-500 w-full h-[100vh] items-center justify-center text-center">
      <h1 className=" text-3xl  md:text-6xl">Select Leaderboard</h1>
      <div className="flex items-center justify-center gap-4 w-full h-auto">
        <div className="flex flex-col gap-3 border border-slate-500 p-2 md:p-10 rounded-xl hover:border-slate-400 transition-all duration-100">
          <img
            className="w-28 md:w-52 h-auto rounded-sm"
            src={FirstImage}
            alt="First Image"
          />
          <Link
            className="p-4 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
            to={'/level1leaderboard'}
          >
            Level 1
          </Link>
        </div>
        <div className="flex flex-col gap-3 border border-slate-500 p-2 md:p-10 rounded-xl hover:border-slate-400 transition-all duration-100">
          <img
            className="w-28 md:w-52 h-auto rounded-sm"
            src={FirstImage}
            alt="First Image"
          />
          <Link
            className="p-4 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
            to={'/level2leaderboard'}
          >
            Level 2
          </Link>
        </div>
        <div className="flex flex-col gap-3 border border-slate-500 p-2 md:p-10 rounded-xl hover:border-slate-400 transition-all duration-100">
          <img
            className="w-28 md:w-52 h-auto rounded-sm"
            src={FirstImage}
            alt="First Image"
          />
          <Link
            className="p-4 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
            to={'/level3leaderboard'}
          >
            Level 3
          </Link>
        </div>
      </div>
    </div>
  );
}
