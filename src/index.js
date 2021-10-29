import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Room() {
  const [isLit, setLit] = React.useState(true);
  const brightness = isLit ? "lit" : "dark";
  const [temp, setTemp] = React.useState(72);
  return (
    <div className={`room ${brightness}`}>
      the room is {isLit ? "lit" : "dark"}
      <br />
      <button onClick={() => setLit(!isLit)}>flip</button>&nbsp;
      <button onClick={() => setLit(true)}>ON</button>&nbsp;
      <button onClick={() => setLit(false)}>OFF</button>
      <hr />
      the room is {temp} &deg;F
      <br />
      <button onClick={() => setTemp((prevState) => prevState + 1)}>+</button>
      &nbsp;
      <button onClick={() => setTemp((prevState) => prevState - 1)}>-</button>
    </div>
  );
}

ReactDOM.render(<Room />, document.getElementById("root"));
