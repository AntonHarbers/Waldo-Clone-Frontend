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

  return <h1 className="absolute top-5 ml-auto mr-auto">{timer.toFixed(2)}</h1>;
}
