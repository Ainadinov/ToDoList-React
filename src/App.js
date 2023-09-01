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

const [filtered, setFiltered] = useState(todo)
const [title, setTitle] = useState("To Do")

  useEffect (()=>{
    setFiltered(todo)
   
    todo.filter(item => {if(item.status !== false){
      todoFilter({name: 'To Do', status: true})
    }}) 

  }, [todo] )

  const todoFilter = (obj) =>{
    setTitle(obj.name)
    if(obj.status === true){
      let newTodo = [...todo].filter(item => item.status !== 'trash') 
      setFiltered(newTodo)
    }else if (obj.status === 'trash'){
      let newTodo1 = [...todo].filter(item => item.status == obj.status) 
      setFiltered(newTodo1)
    }else {
      let newTodo2 = [...todo].filter(item => item.status == obj.status)
      setFiltered(newTodo2)
  }
}

  return (
    <div className='app'>      
        <Header todo={todo} setTodo={setTodo} todoFilter={todoFilter}/>
        <Lists todo={todo} setTodo={setTodo} todoFilter={todoFilter} filtered={filtered} setFiltered={setFiltered} title={title} />
        <Footer/>
    </div>
  );
}

export default App;
