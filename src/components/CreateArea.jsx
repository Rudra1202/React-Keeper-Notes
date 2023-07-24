import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setNote(previous => {
      return {
        ...previous,
        [name]: value
      };
    })
  }
  function add(event) {
    props.onadd(note);
    event.preventDefault();
    setNote({title:"",content:""})
  }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" autoComplete="off" autoFocus value={note.title} placeholder="Title" />

        <textarea onChange={handleChange} name="content" value={note.content} placeholder="Take a note..." rows="3" />
        <button onClick={add}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
