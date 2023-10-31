import React from "react";
import { Link } from "react-router-dom";
import "../pages/styles.css"

function PageNotFound() {
    return (
        <div>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d8094059120725.5a15c9fa09761.gif" alt="depressed cartoon" />
            <h1>Page Not Found!</h1>
            <p>Nothing to laugh about here, go back to <Link to="/">Home</Link></p>
        </div>
    )
}

export default PageNotFound;
