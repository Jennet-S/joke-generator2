import React, { useEffect, useState,useRef } from "react";
import JokeDisplay from "../components/JokeDisplay";
import JokeButton from "../components/JokeButton";

const JokeData = () => {
    // useState hook to manage the different states
    const [data, setData] = useState([]);
    const [randomJoke, setRandomJoke] = useState(null);
    const [showPunchline, setShowPunchline] = useState(false);
    const countdown = useRef(3)

    // useEffect hook to handle side effects, in this case data fetching
    useEffect(() => {
     // Decrease countdown by 1 every second
        // Fetches the data from the API when component is mounted. 
        // Will refresh when component updates(but won't refresh page). 
        // Promise and error handling
        fetch("https://api.sampleapis.com/jokes/goodJokes")
            //Will check if HTTP resonse is ok(status 200), if not throws error.
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network error");
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
                console.error("Error fetching data:", error);
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
            countdown.current =3;
            const countdownInterval = setInterval(() => {
                countdown.current--;
                console.log('countdown',countdown.current);
                if(countdown.current<=0){
                    clearInterval(countdownInterval);
                }
            }, 1000);
            // setCountdown(3); // Resets countdown
            setShowPunchline(false); // Hides punchline display until next countdown completed


            // setTimeout(() => {
            //     // Clear countdown interval after 3 second delay
            //     clearInterval(countdownInterval);
            //     // State changes to true to display punchline
            //     setShowPunchline(true);
            // }, 3000);
        }
    };

    // Conditional (ternary) expression
    // If randomJoke does not exist, it will render button that calls the newJoke function
    // If it exist, it will render the JokeDisplay component.   
    return (
        <div>
{countdown.current}
            {!randomJoke ? (
                <JokeButton newJoke={newJoke} />
            ) : (
                <JokeDisplay
                    randomJoke={randomJoke}
                    showPunchline={showPunchline}
                    countdown={countdown.current}
                    newJoke={newJoke}
                />
            )}
        </div>
    );
};


export default JokeData;
