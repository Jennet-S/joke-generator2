import React from "react";
import "../pages/styles.css"
import imgjokedata from "../code-images/imgjokedata.png"
import imgjokebutton from "../code-images/imgjokebutton.png"
import imgjokedisplay from "../code-images/imgjokedisplay.png"
import imgapproutes from "../code-images/imgapproutes.png"

function AboutPage() {
    return (
        <div className="about-page">
            <br />
            <h1>About</h1>
            <br />
            <p>A generator that fetches data from an API and renders on the screen(with a button click). Includes a countdown timer that displays in between the time the button is clicked and the data displayed</p>

            <p>Joke data component, button component, display component, routes, navigation bar component</p>
            <br />
            <div className="Jdata">
                <h2>Joke Data Component</h2>
                <img src={imgjokedata} alt="Joke data code pic" />
            </div>
            <br />

            <div className="Jbutton">
                <h2>Joke Button Component</h2>
                <img src={imgjokebutton} alt="Joke button code pic" />
            </div>
            <br />

            <div className="jdisplay">
                <h2>Joke Display Component</h2>
                <img src={imgjokedisplay} alt="Joke display code pic" />
            </div>
            <br />
            <div className="Arouters">
                <h2>Routes</h2>
                <img src={imgapproutes} alt="App routes code pic" />
            </div>
            <br />

        </div>
    )
}

export default AboutPage;