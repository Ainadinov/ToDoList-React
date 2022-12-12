import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Lists from './components/Lists';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([
    // {
    //   id: uuidv4(),
    //   title: 'Write Essay',
    //   status: true,
    // },
    // {
    //   id: uuidv4(),
    //   title: 'One Hour CSS Course Online',
    //   status: true,
    // },
    // {
    //   id: uuidv4(),
    //   title: 'Go to Gym',
    //   status: false,
    // },
    // {
    //   id: uuidv4(),
    //   title: 'Buy One Way Tickets to San Fransico',
    //   status: 'trash',
    // },
    // {
    //   id: uuidv4(),
    //   title: 'Go to Gym',
    //   status: 'trash',
    // },

])


  useEffect (()=>{
    setFiltered(todo)
   
    todo.filter(item => {if(item.status !== false){
      todoFilter(true)
    }}) 

  }, [todo] )

  useEffect (()=>{
    setTodoOpen(true)
  }, [] )

  const [filtered, setFiltered] = useState(todo)

  const [isTodoOpen, setTodoOpen] = useState(false);
  const [isTrashOpen, setTrashOpen] = useState(false);
  const [isDoneOpen, setDoneOpen] = useState(false);

  const todoFilter = (status) =>{
    if(status === true){
      setTodoOpen(true)
      setTrashOpen(false)
      setDoneOpen(false)
      let newTodo = [...todo].filter(item => item.status !== 'trash') 
      setFiltered(newTodo)
    }else if (status === 'trash'){
      let newTodo1 = [...todo].filter(item => item.status == status) 
      setTrashOpen(true)
      setTodoOpen(false)
      setDoneOpen(false)
      setFiltered(newTodo1)
    }else {
      let newTodo2 = [...todo].filter(item => item.status == status)
      setTodoOpen(false) 
      setTrashOpen(false)
      setDoneOpen(true)
      setFiltered(newTodo2)
  }
}

  return (
    <div className='app'>      
        <Header todo={todo} setTodo={setTodo} todoFilter={todoFilter}/>
        <Lists todo={todo} setTodo={setTodo} todoFilter={todoFilter} filtered={filtered} setFiltered={setFiltered} isTodoOpen={isTodoOpen} isTrashOpen={isTrashOpen} isDoneOpen={isDoneOpen} setTodoOpen={setTodoOpen} />
        <Footer/>
    </div>
  );
}

export default App;
