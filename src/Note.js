import {useContext} from 'react'
import Test from "./context"
import {BsTrash} from "react-icons/bs"
import {BiEditAlt} from "react-icons/bi"

const Note = ({note}) => {  
    const {setNotes, notes, ref, displayMessage} = useContext(Test)
    
    const deleteNote = (id) => {
        const trans = notes.filter(n => n.id !== id)
        setNotes(trans)       
    }
    const editNote = (id) => {
        const target = notes.find(n => n.id === id)
        ref.current.value = target.text
        setNotes(notes.filter(n => n.id !== id))

    }
    
    return (
        <div className = "note">
            <p style={{textTransform:"capitalize", fontWeight:"bold"}}>{note.text}</p>
            <div style={{display:"flex", width:"50px", justifyContent:"space-between"}}>
                <BiEditAlt 
                    className="icons"
                    style={{color:"green", cursor:"pointer"}}
                    onClick={() => editNote(note.id)}
                />
                <BsTrash 
                    className="icons"
                    style={{color:"red", cursor:"pointer"}}
                    onClick={() => {
                        deleteNote(note.id);
                        displayMessage("Заметка удалена!", "#ffee93")
                    }}
                />
            </div>
        </div>  
    )
}

export default Note
