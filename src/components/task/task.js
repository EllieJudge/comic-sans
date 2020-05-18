import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './task.css';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import Clock from '../assets/clock.png';




function Task(props){
       const [closeIconSize, setCloseIconSize] = useState("small")

    const handleChecked = (event) => {
        props.completeTaskFunc(props.id, event.target.checked)
      };

    const handleDelete = () => {
        props.deleteTaskFunc(props.id)
    };

    const handleMouseEnterCloseIcon = () => {
        setCloseIconSize("large")
    }

    const handleMouseLeaveCloseIcon = () => {
        setCloseIconSize("small")
    }

    const handleClockClick = () => {
        console.log("clock clicked")

    }
   

const checkBoxStyles = theme => ({
    root: {
      '&$checked': {
        color: "rgb(74,168,185)",
      },
    },
    checked: {},
   })

const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

    return (
        <>
        <div style={{display:"flex", justifyContent:"center"}}>

        {props.completed === false ? <h1 className="todo-line">{props.text}</h1> : 
        <span style={{color: 'rgb(237,117,140)', textDecoration: 'line-through'}}><span style={{ color: 'black'}}><h1>{props.text}</h1></span></span>}

        <img src={Clock} className="clock" alt="clockImage" onClick={handleClockClick}/>

        <CustomCheckbox 
        checked={props.completed}
        onChange={handleChecked}
        />


        <CloseIcon
        onClick={handleDelete}
        onMouseEnter={handleMouseEnterCloseIcon}
        onMouseLeave={handleMouseLeaveCloseIcon}
        color="secondary"
        fontSize={closeIconSize}
        style={{ height: "40px", marginTop:"24px"}}
        />
        </div>
        </>
    )
};

export default Task;
