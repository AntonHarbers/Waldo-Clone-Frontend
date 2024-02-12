/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NameForm({ level, gameId, score }) {
  const navigate = useNavigate();
  const [nameText, setNameText] = useState('');
  const sendingResponse = useRef(false);

  const SubmitNameForm = async () => {
    if (sendingResponse.current) return;
    sendingResponse.current = true;

    const response = await fetch(
      `${import.meta.env.VITE_API}/games/${gameId}/name`,
      {
        method: 'PATCH',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: nameText,
        }),
      }
    ).then((sendingResponse.current = false));

    if (response.ok) {
      navigate(`/level${level}leaderboard`);
    } else {
      console.log('problem uploading name to server');
    }
  };

  return (
    <div className="select-none flex bg-slate-500 w-full h-[100vh] items-center justify-center text-center flex-col">
      <h1>Score: {(score / 1000).toFixed(2)}</h1>
      <label htmlFor="name">Enter your name:</label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Leaderboard name..."
        value={nameText}
        onChange={(e) => setNameText(e.target.value)}
      />
      <button onClick={SubmitNameForm}>Submit</button>
    </div>
  );
}
