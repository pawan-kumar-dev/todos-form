import React, { useState, useEffect } from 'react';
import classes from './App.module.css';
import Todo from './Components/Todo';
import Header from './Components/Header';
const App=()=> {
  const [todo,setTodo]=useState([])
  const [load,setLoad]=useState(true)
 useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>{
     res.json().then((result)=>{
       const todos=result.slice(0,50)
       setTodo(todos)
       setLoad(false)
      })
    })
  },[])
  return(
    load===true?
    <div>
      <h1>
      <center>Todo App made with React</center>
      </h1>
      <div className={classes.loading}></div>
    </div>:
    <div className={classes.App}>
      <Header/>
      <Todo todo={todo}/>
    </div>
  );
    }
export default App;
