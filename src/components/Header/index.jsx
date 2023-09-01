import './style.css';
import { useState } from "react";
import {PLUS__ICON} from "../images/index.js";
import Modal from './Modal';

const  btn = [
    { 
        "name": "To Do" ,
        "status": true},
    { 
        "name": "Done" ,
        "status": false},
    { 
        "name": "Trash" ,
        "status": "trash"},

  ];

function Header({todo, setTodo, todoFilter}){
    const [isModalOpen, setModalOpen] = useState(false);

    const handleTriggerModal = () => {
        setModalOpen((prevModal) => !prevModal);
    };
    

    return(
        <div className="header">
            <div className="header__todo">
                <h1 className="todo__title">Simple To Do List</h1>
                <p className="todo__text">Today is awesome day. The weather is awesome, you are awesome too! </p>
                <div className="todo__button">
                    {
                        btn.map((obj, i)=>(
                            <button  onClick={()=>todoFilter(obj)}  className="todo__bth">{obj.name}</button>
                        ))
                    }
                </div>
            </div>
            <div className="header__modal">
            {isModalOpen && ( <Modal todo={todo} setTodo={setTodo} setModalOpen={setModalOpen}/>)}
                <button onClick={handleTriggerModal} className="modal__bth">{PLUS__ICON}</button>
            </div>
        </div>
    )
}

export default Header;