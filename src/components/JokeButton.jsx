import React from "react";
import Button from 'react-bootstrap/Button';

const JokeButton = ({ newJoke }) => {
  return (
    <div>
      <Button as="a" variant="warning" onClick={newJoke}>Click for a laugh</Button>
    </div>
  );
};


export default JokeButton;