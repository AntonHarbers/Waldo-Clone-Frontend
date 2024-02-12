import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '../components/Loading';

export default function LeaderboardPage() {
  const level = useLocation().pathname.slice(5)[1];
  const [gameData, setGameData] = useState([{ _id: 1, player_name: 'time' }]);
  const fetchDone = useRef(false);

  useEffect(() => {
    if (fetchDone.current) return;
    const fetchData = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API}/games/${level}`
      );
      const data = await response.json();
      console.log(data);
      setGameData(data);
    };
    fetchData();
    fetchDone.current = true;
  }, [level]);

  return fetchDone.current ? (
    <div className=" select-none flex flex-col gap-4 pb-10 bg-slate-500 w-full min-h-[100vh] items-center justify-center text-center">
      <h1 className="text-4xl mt-28 md:mt-0">Level {level} Leaderboard</h1>
      <div className="flex flex-col">
        <div className="flex">
          <h1 className="border w-20 p-3">Place</h1>
          <h1 className="border w-24 p-3">Time</h1>
          <h1 className="border w-52 p-3">Player Name</h1>
        </div>
        {gameData.map((game, index) => (
          <div
            key={game._id}
            className={`flex ${index == 0 && 'bg-green-300'}`}
          >
            <h1 className="border w-20 p-2">{index + 1}.</h1>
            <h1 className="border w-24 p-2">
              {((game.finish_time - game.start_time) / 1000).toFixed(2)}s
            </h1>
            <h1 className="border w-52 p-2">{game.player_name}</h1>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}
