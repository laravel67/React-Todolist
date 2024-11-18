import { useState } from 'react';
import './index.css';
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text:"Hello word"
    }
  ]);
  const [inputNotes, setInputNote] = useState('');
  function handleInput(e) {
    setInputNote(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (inputNotes.trim() !== "") {
      const newNote={
        id: new Date().getTime(),
        text: inputNotes,
    }
    setNotes([...notes,newNote])
      setInputNote('');
    }
  }
  function handleDelete(id) {
    setNotes(notes.filter(note=> note.id !==id))
  }
  return (
    <>
      <div className="App">
          <h1 className="">Note</h1>
          <form onSubmit={handleSubmit} className="note-input">
            <input className="" type='text' value={inputNotes} onChange={handleInput}  placeholder='Add a note' />
            <button type='submit ' className="">Add</button>
          </form>
          <ul className="note-list">
            {notes.map((note , index) => (
              <li className="" key={index}>
              {note.text}
                <button onClick={()=>handleDelete(note.id) } className="">Hapus</button>
              </li>
            ))}
          </ul>
      </div>
    </>
  );
}
export default App;
