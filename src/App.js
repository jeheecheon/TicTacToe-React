import React from "react"; // Import the React object

function Square({ value }) {
  function handleClick() {
    console.log("clicked! ".concat({value}.value));
  }
  return <button onClick={handleClick} className="square">{value}</button>;
}

export default function Board() {
  return (
    <React.Fragment>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </React.Fragment>
  );
}
