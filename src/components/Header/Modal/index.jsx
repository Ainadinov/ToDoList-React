import React,{ useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Modal({todo, setTodo, setModalOpen}){
    const[value, setValue] = useState('')
    function saveTodo(){
        if(!value) return;
        setTodo(
            [...todo,{
                id: uuidv4(),
                title: value,
                status: true,
            }]
        )                                        
        setValue('')
        setModalOpen(false)
    }
    
    return(
        <>
            <div className="modal__box">
                <p className='modal__title'>Add New To Do</p>
                <textarea className='modal__text' placeholder='Your text' value={value} onChange={(e)=>setValue(e.target.value)}></textarea>
                <button className='modap__add' onClick={saveTodo}>Add</button>
            </div>
        </>
    )
}

export default Modal;