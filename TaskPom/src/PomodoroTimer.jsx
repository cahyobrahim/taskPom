import {useState, useEffect} from 'react';

const WORK_SECONDS = 25 * 60; // 25 minutes
const BREAK_SECONDS = 5 * 60; // 5 minutes

function PomodoroTimer(){
    const [mode, setMode] = useState("work"); // "work" or "break"
    const [secondsLeft, setSecondsLeft] = useState(WORK_SECONDS);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(!isRunning) return;

        // if the timer reaches 0, switch modes
        if(secondsLeft <= 0){
            const nextMode = mode === "work" ? "break" : "work";
            setMode(nextMode);
            setSecondsLeft(nextMode === "work" ? WORK_SECONDS : BREAK_SECONDS);
            return;
        }

        const intervalId = setInterval(() => {
            setSecondsLeft(prev=> prev - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isRunning, secondsLeft, mode]);

    function formatTime(totalSeconds){
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    function handleReset(){
        setMode("work");
        setSecondsLeft(WORK_SECONDS);
        setIsRunning(false);
    }

  return (
    <div>
      <h2>{mode === "work" ? "Focus Time" : "Break Time"}</h2>
      <h1>{formatTime(secondsLeft)}</h1>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default PomodoroTimer;