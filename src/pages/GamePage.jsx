/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import FirstImage from '/gameOne/game.webp';
import CharacterSelect from '../components/CharacterSelect';
import { useNavigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function GamePage() {
  const level = useLocation().pathname.slice(5)[1];
  const navigate = useNavigate();
  const fetchDone = useRef(false);

  const [gameImage] = useState(
    level == 1 ? FirstImage : level == 2 ? FirstImage : null
  );
  const [gameId, setGameId] = useState(null);
  const [timer, setTimer] = useState(0);
  const [charData, setCharData] = useState();
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState([0, 0]);
  const [selectedScreenCoords, setSelectedScreenCoords] = useState([0, 0]);
  const [markers, setMarkers] = useState([]);

  const HandleImageClick = (event) => {
    const target = event.target;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / target.offsetWidth) * 100;
    const y = ((event.clientY - rect.top) / target.offsetHeight) * 100;
    setSelectedScreenCoords([event.clientX - 25, event.clientY - 25]);
    setIsSelecting(true);
    setSelectedCoords([parseInt(x), parseInt(y)]);
  };

  const HandleCharacterSelection = async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_API}/characters/${id}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          x: selectedCoords[0],
          y: selectedCoords[1],
        }),
      }
    );

    const data = await response.json(); // data returned will be a single bool {true/false}

    if (data) {
      setMarkers((prevMarkers) => [...prevMarkers, selectedScreenCoords]);
      setCharData((prevCharData) =>
        prevCharData.filter((prevChar) => prevChar._id !== id)
      );
    }

    if (charData.length == 1) {
      const response = await fetch(
        `${import.meta.env.VITE_API}/games/${gameId}`,
        {
          method: 'PATCH',
          mode: 'cors',
        }
      );

      if (response.ok) {
        navigate('/leaderboards');
      } else {
        console.log('There was an issue with the server');
      }
    }

    setSelectedScreenCoords([0, 0]);
    setIsSelecting(false);
    setSelectedCoords([0, 0]);
  };

  const HandleStartGame = async () => {
    setTimer(0);

    const response = await fetch(`${import.meta.env.VITE_API}/games`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        level: level,
      }),
    });

    const data = await response.json();

    if (!data) return console.log('Issue posting new game');

    setGameId(data);
  };

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer + 0.01), 10);
    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (fetchDone.current) return;
    const fetchData = async (route) => {
      const response = await fetch(`${import.meta.env.VITE_API}/${route}`);
      const data = await response.json();
      setCharData(data.filter((char) => char.level == level));
    };
    fetchData('characters');
    fetchDone.current = true;
  }, [level]);

  return (
    <div
      onClick={() => {
        isSelecting && setIsSelecting(false);
      }}
      className=" 
      select-none flex bg-slate-500 
      w-full h-[100vh] items-center justify-center 
      text-center"
    >
      <h1 className="absolute top-5 ml-auto mr-auto">{timer.toFixed(2)}</h1>
      {markers.map((marker) => (
        <div
          key={marker[0] + marker[1]}
          style={{
            position: 'absolute',
            left: `${marker[0] + 15}px`,
            top: `${marker[1] + 15}px`,
          }}
          className=" bg-green-500 h-5 w-5"
        ></div>
      ))}
      <img
        className=" h-[60vh] md:h-[80vh] w-auto max-w-[90vw] border-white border-4 rounded-sm"
        src={gameImage}
        alt="Game Image"
        onClick={HandleImageClick}
        onLoad={HandleStartGame}
      />
      {isSelecting && (
        <div
          style={{
            position: 'absolute',
            left: `${selectedScreenCoords[0]}px`,
            top: `${selectedScreenCoords[1]}px`,
          }}
        >
          <CharacterSelect
            characterInfo={charData}
            setCharacterInfo={setCharData}
            HandleCharacterSelection={HandleCharacterSelection}
          />
        </div>
      )}
    </div>
  );
}
