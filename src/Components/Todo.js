import React, { useState } from 'react';
import classes from '../App.module.css';
import TodoList from './TodoList';
const Todo=(props)=>{
    const [todo,setTodo]=useState(props.todo)
    const handleClick=(id)=>{
        const updated=todo.filter((todo)=>{
            if(todo.id===id)todo.completed=!todo.completed
            return todo
        })
        setTodo(updated)
    }
        const data=todo.map((item)=>{
            return(
                <TodoList key={item.id} id={item.id} completed={item.completed} title={item.title} handleClick={handleClick}/>
            )
        })
        return(
            <div className={classes.todos}>
                {data}
            </div>
        )
}

export default Todo;