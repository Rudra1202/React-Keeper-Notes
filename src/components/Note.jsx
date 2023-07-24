import React from "react";
import CreateArea from "./CreateArea";

function Note(props) {
  function del(event) {
    props.onDelete(props.id)
    event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={del}>DELETE</button>
    </div>
  );
}

export default Note;
