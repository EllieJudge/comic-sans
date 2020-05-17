import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './add-todo.styles';
import clock from '../assets/clock.png';


function AddTodo(props) {
    const classes = useStyles();
    const [ taskText, setTaskText ] = useState(" ");
    // const [clockHover, setClockHover] = useState('50px') 

    const handleChange = (event) => {
        setTaskText(event.target.value)
        let newTask = event.target.value

        if(event.which === 13){
            props.addTaskFunc(newTask) 
            return setTaskText(" ")
        }
    }

    const handleHover = (event) => {
        // console.log('RIIINNNNG!')
        // make it spin/animate
    }

    return (
        <>
            <h2>{props.text}</h2>
            <br />
            <div>
            {/* <img src={clock} alt="clock" style={{height: clockHover, marginRight: '20PX'}} onMouseEnter={handleHover}/> */}
            <TextField
                classes={{
                    root: classes.root,
                }}
                id="filled-textarea"
                placeholder="My Task..."
                multiline
                rowsMax="1"
                value={taskText}
                onChange={handleChange}
                onKeyDown={handleChange}
            />
            </div>

        </>
    )
}
export default AddTodo;