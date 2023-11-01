import React, { useEffect, useState, useRef } from 'react';
import JokeDisplay from '../components/JokeDisplay';
import JokeButton from '../components/JokeButton';

const JokeData = () => {
  // useState hook to manage the different states
  const [data, setData] = useState([]);
  const [randomJoke, setRandomJoke] = useState(null);

  // useEffect hook to handle side effects, in this case data fetching
  useEffect(() => {
    // Decrease countdown by 1 every second
    // Fetches the data from the API when component is mounted.
    // Will refresh when component updates(but won't refresh page).
    // Promise and error handling
    fetch('https://api.sampleapis.com/jokes/goodJokes')
      //Will check if HTTP resonse is ok(status 200), if not throws error.
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network error');
        }
        // If above is fine, will convert to JS object or array.
        return response.json();
      })
      .then((responseData) => {
        // Updates state of components 'data' to converted JSON data
        setData(responseData);
      })
      // If ever any errors, will log error to console
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // no dependency, will only run once

  // Function to generate a random joke.
  // Also displays countdown timer and the jokes punchline.
  const newJoke = () => {
    // First checks if any jokes available (in Data array)
    // If there is, it will select at random using the randomIndex.
    // Math.random to generate number 0-1
    // Multiplied by length of data array, then rounded down to nearest interger with Math.floor
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setRandomJoke(data[randomIndex]);
    }
  };

  // Conditional (ternary) expression
  // If randomJoke does not exist, it will render button that calls the newJoke function
  // If it exist, it will render the JokeDisplay component.
  return (
    <div>
      {!randomJoke ? (
        <JokeButton newJoke={newJoke} />
      ) : (
        <JokeDisplay randomJoke={randomJoke} newJoke={newJoke} />
      )}
    </div>
  );
};

export default JokeData;
