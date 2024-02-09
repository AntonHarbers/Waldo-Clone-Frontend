import { useEffect, useState } from 'react';
import FirstImage from '/gameOne/game.webp';
import CharacterSelect from '../components/CharacterSelect';
import { characterInfo } from '../models/data';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function GamePage() {
  const navigate = useNavigate();
  const [gameImage] = useState(FirstImage);
  const [timer, setTimer] = useState(0);

  const [charData, setCharData] = useState(characterInfo);
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
    console.log(id);
    console.log(selectedCoords);
    let correct = false;

    // MOCK API CALL
    characterInfo.forEach((entry) => {
      if (entry._id == id) {
        if (
          entry.x <= selectedCoords[0] + 2 &&
          entry.x >= selectedCoords[0] - 2 &&
          entry.y >= selectedCoords[1] - 2 &&
          entry.y <= selectedCoords[1] + 2
        ) {
          correct = true;
        }
      }
    });

    // make api call, check the following on serverside:
    // find character with id, check if coords are within range
    // if they are place a pin on coords, and check if game is over on server
    // if game is over then go to leaderboards and display form for submission of gamescore
    // if they are not then do nothing

    if (correct) {
      setMarkers((prevMarkers) => [...prevMarkers, selectedScreenCoords]);
      setCharData((prevCharData) =>
        prevCharData.filter((prevChar) => prevChar._id !== id)
      );
      console.log(charData);
    } else {
      console.log('nope');
    }

    if (charData.length == 1) {
      navigate('/leaderboards');
      console.log(timer);
      // send game end api post request
    }

    setSelectedScreenCoords([0, 0]);
    setIsSelecting(false);
    setSelectedCoords([0, 0]);
  };

  const HandleStartGame = async () => {
    // make a post api call to post a new game
    // data is _id, playerName (default blank), startTime (default now), endTime (when game ends), score virtual
    setTimer(0);
  };

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer + 0.01), 10);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      onClick={() => {
        isSelecting && setIsSelecting(false);
      }}
      className=" select-none flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center"
    >
      <h1 className=" absolute top-5 ml-auto mr-auto">{timer.toFixed(2)}</h1>
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
