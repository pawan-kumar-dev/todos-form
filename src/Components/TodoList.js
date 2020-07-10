import React from 'react'
import classes from '../App.module.css';
const TodoList=(props)=>{
    let styles=props.completed===true?{textDecoration:"line-through",color:"red",opacity:"0.3",transform:"scale(0.95,0.95)"}:{opacity:"0.9",textDecoration:"none",color:"black"}
        return(
            <div className={classes.todolist}>
                <input type="checkbox" checked={props.completed} onChange={()=>{props.handleClick(props.id)}}/>
                <p style={styles}> {props.title}</p>
            </div>
        )
    }
    export default TodoList;