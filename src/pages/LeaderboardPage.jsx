import { useEffect, useState } from 'react';
import { GameData } from '../models/data';

// eslint-disable-next-line react/prop-types
export default function LeaderboardPage() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    setGameData(GameData);
  }, []);

  return (
    <div className=" flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center">
      {gameData.map((game) => {
        return <div key={game._id}>{game.score}</div>;
      })}
    </div>
  );
}
