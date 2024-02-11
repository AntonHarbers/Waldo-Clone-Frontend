import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

  return (
    <div className="flex items-center justify-center flex-col h-[100vh] gap-2">
      {gameData.map((game) => (
        <div
          key={game._id}
          className="flex flex-col gap-2 w-[300px] items-start"
        >
          <h1>
            {((game.finish_time - game.start_time) / 1000).toFixed(2)}s /{' '}
            {game.player_name}
          </h1>
        </div>
      ))}
    </div>
  );
}
