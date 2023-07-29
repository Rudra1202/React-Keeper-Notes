import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [note, setNote] = React.useState(JSON.parse(localStorage.getItem("notes"))||[]);

  function addNote(note) {
    setNote((previous) => {
      return [...previous, note]
    })
  } 
  function deleteNote(id) {
    setNote((previous) => {
      return previous.filter((noteitem, index) => {
        return index !== id
      })
    })
  }

  useEffect(() => {
    if(note.length)
    localStorage.setItem("notes",JSON.stringify(note));
  }, [note])
  

  return (
    <div>
      <Header />
      <CreateArea
        onadd={addNote}
      />
      {note.map((txt, index) => <Note key={index} id={index} title={txt.title} onDelete={deleteNote} content={txt.content} />)}

      <Footer />
    </div>
  );
}

export default App;
