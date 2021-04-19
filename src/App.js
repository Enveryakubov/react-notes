import Message from "./components/Message";
import NoteForm from "./components/NoteForm";
import Note from "./Note";
import {useState, useRef} from "react"
import Test from "./context"

function App() {
  const [message, setMessage] =  useState("")
  const [notes, setNotes] =  useState([])
  const ref = useRef("")

  const displayMessage = (text, bgColor, ms=1000) => {
    setMessage({text, bgColor})
    setTimeout(() => setMessage(""), ms)
  }
  
  return (
    <Test.Provider value={{
      notes,
      setNotes,
      setMessage,
      displayMessage,
      ref,
      message
    }}>
    <div className="container">
      {message && <Message message={message}/>}
      <h1>Запоминалка</h1>
      <NoteForm/>
      {notes.length > 0 && 
      notes.map(note => <Note key={note.id} note={note}/>)}
      {notes.length > 0 && <button className="deleteBtn" onClick={() => setNotes([])}>Удалить все</button>}
    </div>
    </Test.Provider>
  );
}

export default App;
