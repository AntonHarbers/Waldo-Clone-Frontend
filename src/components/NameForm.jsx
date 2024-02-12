import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

NameForm.propTypes = {
  level: PropTypes.string,
  gameId: PropTypes.string,
  score: PropTypes.number,
};

export default function NameForm({ level, gameId, score }) {
  const navigate = useNavigate();
  const [nameText, setNameText] = useState('');
  const sendingResponse = useRef(false);

  const SubmitNameForm = async () => {
    if (sendingResponse.current) return;
    if (nameText.length == 0 || nameText.length > 19) return;
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
      <h1 className="w-84 text-4xl p-1">
        Your Score: {(score / 1000).toFixed(2)}s
      </h1>

      <input
        id="name"
        name="name"
        className="w-52 p-2 m-2 text-center rounded-md outline-none"
        maxLength={20}
        minLength={1}
        type="text"
        placeholder="Leaderboard name..."
        value={nameText}
        onChange={(e) => setNameText(e.target.value)}
      />
      <button
        className="w-52 p-2 bg-slate-400 rounded-md hover:bg-green-300 transition-all duration-100 active:scale-90"
        onClick={SubmitNameForm}
      >
        Submit
      </button>
    </div>
  );
}
