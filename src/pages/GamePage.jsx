import { useState } from 'react';
import FirstImage from '/gameOne/game.webp';
import firstChar from '/gameOne/1.png';
import secondChar from '/gameOne/2.png';
import thirdChar from '/gameOne/3.png';
import fourthChar from '/gameOne/4.png';

import CharacterSelect from '../components/CharacterSelect';

export default function GamePage(gameInfo) {
  const [gameImage] = useState(
    gameInfo.name == 'First' ? FirstImage : FirstImage
  );

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
    setSelectedCoords([x, y]);
  };

  const HandleCharacterSelection = async (id) => {
    console.log(id);
    console.log(selectedCoords);
    // make api call, check the following on serverside:
    // find character with id, check if coords are within range
    // if they are place a pin on coords, and check if game is over on server
    // if game is over then go to leaderboards and display form for submission of gamescore
    // if they are not then do nothing

    let isCorrect = true;

    if (isCorrect) {
      setMarkers((prevMarkers) => [...prevMarkers, selectedScreenCoords]);
    }
    setSelectedScreenCoords([0, 0]);
    setIsSelecting(false);
    setSelectedCoords([0, 0]);
  };
  return (
    <div
      onClick={() => {
        isSelecting && setIsSelecting(false);
      }}
      className=" select-none flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center"
    >
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
            characterInfo={[
              { _id: '1', name: 'Waldo', game: '1', img: firstChar },
              { _id: '2', name: 'Jason', game: '1', img: secondChar },
              { _id: '3', name: 'Robot', game: '1', img: thirdChar },
              { _id: '4', name: 'Wilda', game: '1', img: fourthChar },
            ]}
            HandleCharacterSelection={HandleCharacterSelection}
          />
        </div>
      )}
    </div>
  );
}
