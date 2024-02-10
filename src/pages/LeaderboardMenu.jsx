import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function LeaderboardMenu() {
  return (
    <div className=" flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center">
      <Link to={'/level1leaderboard'}>Level 1</Link>
      <Link to={'/level2leaderboard'}>Level 2</Link>
      <Link to={'/level3leaderboard'}>Level 3</Link>
    </div>
  );
}
