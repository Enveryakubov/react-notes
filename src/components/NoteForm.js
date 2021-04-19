import { useContext} from 'react'
import Test from "../context"

const NoteForm = () => {
    const {setNotes, ref, displayMessage} = useContext(Test)

    const onSubmit = (e) => {

        e.preventDefault()
        if (ref.current.value.trim() === "") {
            displayMessage("Введите текст", "#ec4646")
            return
        }
        const newNote = {
            id: Date.now().toString(),  
            text: ref.current.value
        }
        setNotes(prev => [...prev, newNote])
        displayMessage("Заметка добавлена", "#00917c")
        ref.current.value = ""
        
    }

    return (
        <form className="noteForm" onSubmit={onSubmit} >
            <input 
            className="inputField"
            placeholder="Напишите вашу заметку..." 
            ref = {ref}
            /> 
            <button 
            style={{ height:"33px", width:"120px", backgroundColor:"#555", borderRadius:"0px 5px 5px 0px", border:"none", fontSize:"20px", color:"white"}}
            type="submit"
            >{ref.current.value ? "Изменить": "Запомить"}</button>
        </form>
    )
}

export default NoteForm
