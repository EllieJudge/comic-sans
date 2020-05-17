import React, { useState } from 'react';
import './task.css';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';

function Task(props){
    const [checked, setChecked] = useState(false);

    const handleChecked = (event) => {
        setChecked(event.target.checked);
        props.completeTaskFunc(props.id, event.target.checked)
      };

    const handleDelete = () => {
        props.deleteTaskFunc(props.id)
    };


    return (
        <>
        <div style={{display:"flex", justifyContent:"center"}}>

        {props.completed === false ? <h1 className="todo-line">{props.text}</h1> : <h1 className="todo-line"><strike>{props.text}</strike></h1>}
        
        <Checkbox 
        checked={props.completed}
        onChange={handleChecked}
        color="primary"
        />

        <CloseIcon
        onClick={handleDelete}
        color="secondary"
        style={{ height: "40px", marginTop:"24px"}}
        />
        </div>
        </>
    )
};

export default Task;
