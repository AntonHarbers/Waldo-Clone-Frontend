import { useEffect, useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const startTime = Date.now(); // Capture start time in milliseconds
    const interval = setInterval(() => {
      // Calculate elapsed time in seconds
      const secondsElapsed = (Date.now() - startTime) / 1000;

      setTimer(secondsElapsed);
    }, 10); // Update every second

    return () => clearInterval(interval);
  }, []);

  return <h1 className="absolute top-5 ml-auto mr-auto">{timer.toFixed(2)}</h1>;
}
