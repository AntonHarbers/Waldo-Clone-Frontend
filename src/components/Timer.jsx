import { useEffect, useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      // Calculate elapsed time in seconds
      const secondsElapsed = (Date.now() - startTime) / 1000;

      setTimer(secondsElapsed);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      className={`select-none absolute bottom-2 right-2 text-lg ${
        timer < 5
          ? 'bg-green-400'
          : timer < 10
          ? ' bg-yellow-300'
          : 'bg-slate-200'
      } p-2 rounded-md`}
    >
      Time: {timer.toFixed(2)}s
    </h1>
  );
}
