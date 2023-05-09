import './style.css';
import { useState, } from "react";
import {MOORE__ICON} from '../images';
import React from 'react';
import { TRASH__ICON } from '../images';
import { ADD__ICON } from '../images';

function Lists({todo, setTodo, filtered,  isTodoOpen, isTrashOpen, isDoneOpen, todoFilter }){
    const [isBthOpen, setBthOpen] = useState(true)
    const [isTrashBthOpen, setTrashBthOpen] = useState('trash');
   
    function statusTodo(id){
        let newTodo = [...todo].filter(item=>{
            if(item.id == id){
                item.status = !item.status                
            } 
            return item;           
        })
        setTodo(newTodo)
    }
    
    function toTrashTodo(id){
        let newTodo = [...todo].filter(item=>{
            if(item.id == id){
                item.status = "trash"                
            } 
            return item;
                       
        })
        setTodo(newTodo)   
        
    }
    
    const trashBthOpen = (id) =>{  
        setBthOpen(id)
        setTrashBthOpen(id)
    }

    function deleteTodo(id){
        let newTodo = [...todo].filter(item=>item.id != id)
        setTodo(newTodo)
        // todoFilter(true)
        todoFilter("trash") 
    }

    function backTodo(id){
        let newTodo = [...todo].filter(item=>{
            if(item.id == id){
                item.status = true                
            } 
            return item;           
        })
        setTodo(newTodo)
    }

    return(
        <div className='lists'>
                <div>
                    {isTodoOpen && <h1 className='list__title'>To Do</h1>}
                    {isDoneOpen && <h1 className='list__title'>Done</h1>}
                    {isTrashOpen && <h1 className='list__title'>Trash</h1>}
                </div>
            {
                filtered.map(item=>(
                    <div className='lists__item' key={item.id}>
                        <span onClick={()=>trashBthOpen(item.id)}  className='list__more'>{MOORE__ICON}</span>  
                        <input  class="list-checkbox" id={item.id} type="checkbox" name="rad"/><label onClick={()=>statusTodo(item.id)} className={!item.status ? "close" : 'list__todo' } for={item.id}><span>{item.title}</span></label>       
                    {isBthOpen == item.id ? item.status == true ? <div className='todo__bth-move' >
                        <button onClick={()=> toTrashTodo(item.id)}
                            className='todo__move'>Move to Trash</button>
                            <div className='todo__icon'>{TRASH__ICON}</div >
                        </div>: "" : ""
                    }
                    {isTrashBthOpen == item.id ? item.status === 'trash' ? <div className='trash__bth'>
                        <button onClick={()=> deleteTodo(item.id)}  className='trash__move-1'>Delete Forever</button>
                            <div className='trash__icon-1'>{TRASH__ICON}</div >
                            <button onClick={()=> backTodo(item.id)} className='trash__move-2'>Move Back To To Do</button>
                            <div className='trash__icon-2'>{ADD__ICON}</div >
                         </div>: "" : ""
                     }
                    </div>
                ))
            }
        </div>
    )
}

export default Lists;