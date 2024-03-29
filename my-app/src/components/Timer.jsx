import '../Timer.css'
import React, { useState, useEffect } from 'react';

function Timer( {resetScore, updateBestScore, onRegenerateLetterBank, timeKey}) {
  const [count, setCount] = useState(15);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((currentCount) => currentCount - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []); 

  useEffect(() => {
 
    if (count === 0) {
      onRegenerateLetterBank();
      resetScore();
      updateBestScore();
      setCount(15); 
    }
  }, [count, onRegenerateLetterBank, resetScore, updateBestScore]);
  
  useEffect(() => {
    setCount(15); 
  }, [timeKey]);

  return (
    <div className='myTimer'>
      <p>{count}</p>
    </div>
  );
}

export default Timer;
