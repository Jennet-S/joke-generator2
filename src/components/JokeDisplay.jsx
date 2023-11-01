import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

// Destructuring within the function parameters
// Extracts 3 properties from the object to be passed to JokeDisplay component
const JokeDisplay = ({ randomJoke, newJoke }) => {
  const [countdown, setCountdown] = useState();
  useEffect(() => {
    let countdownState = 3;
    setCountdown(countdownState);
    setCountdown(countdownState--);
    const countdownInterval = setInterval(() => {
      setCountdown(countdownState--);
      if (countdownState < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  }, [randomJoke]);

  const onclick = () => {
    setCountdown(3);
    newJoke();
  };
  return (
    <div>
      <div className="joke-display">
        <h1>{randomJoke.setup}</h1>
        {/*Conditional rendering for Countdown
        If the number is greater than 0, it will display the countdown
        Else it shows the punchline */}
        {countdown > 0 ? <p>{countdown}</p> : <p>{randomJoke.punchline}</p>}
        {/* Button appears after countdown reaches 0 */}
        {countdown === 0 && (
          <Button as="a" variant="warning" onClick={onclick}>
            Next joke
          </Button>
        )}
      </div>
    </div>
  );
};

export default JokeDisplay;
