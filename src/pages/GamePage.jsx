/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import FirstImage from '/gameOne/game.webp';
import CharacterSelect from '../components/CharacterSelect';
import { useLocation } from 'react-router-dom';
import NameForm from '../components/NameForm';
import Timer from '../components/Timer';
import Loading from '../components/Loading';
import Markers from '../components/Markers';
import Characters from '../components/Characters';

export default function GamePage() {
  const level = useLocation().pathname.slice(5)[1];
  const [gameImage] = useState(
    level == 1 ? FirstImage : level == 2 ? FirstImage : null
  );
  const fetchDone = useRef(false);
  const fetchingCharCoords = useRef(false);
  const [gameId, setGameId] = useState(null);
  const [charData, setCharData] = useState();
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState([0, 0]);
  const [markers, setMarkers] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const HandleImageClick = (event) => {
    if (fetchingCharCoords.current) return;
    const target = event.target;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / target.offsetWidth) * 100;
    const y = ((event.clientY - rect.top) / target.offsetHeight) * 100;
    setIsSelecting(true);
    setSelectedCoords([parseInt(x), parseInt(y)]);
  };

  const HandleCharacterSelection = async (id) => {
    fetchingCharCoords.current = true;
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
      setMarkers((prevMarkers) => [...prevMarkers, selectedCoords]);
      setCharData((prevCharData) =>
        prevCharData.filter((prevChar) => prevChar._id !== id)
      );
      fetchingCharCoords.current = false;
    }

    if (charData.length == 1) {
      const response = await fetch(
        `${import.meta.env.VITE_API}/games/${gameId}/time`,
        {
          method: 'PATCH',
          mode: 'cors',
        }
      );

      if (response.ok) {
        const data = await response.json();
        setGameOver(true);
        setScore(data.score);
      } else {
        console.log('There was an issue with the server');
      }
    }

    setIsSelecting(false);
    setSelectedCoords([0, 0]);
  };

  const HandleStartGame = async () => {
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
    if (fetchDone.current) return;
    const fetchData = async (route) => {
      const response = await fetch(`${import.meta.env.VITE_API}/${route}`);
      const data = await response.json();
      setCharData(data.filter((char) => char.level == level));
    };
    fetchData('characters');
    fetchDone.current = true;
  }, [level]);

  return gameOver ? (
    <NameForm level={level} gameId={gameId} score={score} />
  ) : !fetchDone.current ? (
    <Loading />
  ) : (
    <div
      onClick={() => {
        isSelecting && setIsSelecting(false);
      }}
      className="select-none flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center"
    >
      <Timer />
      <Characters charData={charData} />
      <div className="relative w-[45vw] h-auto">
        <img
          className="w-[45vw] h-auto"
          src={gameImage}
          alt="Game Image"
          onClick={HandleImageClick}
          onLoad={HandleStartGame}
        />
        <Markers markers={markers} />
        {isSelecting && (
          <CharacterSelect
            characterInfo={charData}
            HandleCharacterSelection={HandleCharacterSelection}
            selectedCoords={selectedCoords}
          />
        )}
      </div>
    </div>
  );
}
