import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './task.css';
import Checkbox from '@material-ui/core/Checkbox';
import CloseIcon from '@material-ui/icons/Close';
import Clock from '../assets/clock.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Task(props) {
    const [closeIconSize, setCloseIconSize] = useState();

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
    const [startDate, setStartDate] = useState(new Date());

    const handleClockClick = () => {
        setTime(<DatePicker selected={startDate} onChange={date => setStartDate(date)} />) // conditional rendering (in return show date picker)
    }

    const checkBoxStyles = theme => ({
        root: {
            '&$checked': {
                color: "rgb(74,168,185)",
            },
        },
        checked: {},
    })

    const [time, setTime] = useState(<img src={Clock} className="clock" alt="clockImage" onClick={handleClockClick} />)
    const CustomCheckbox = withStyles(checkBoxStyles)(Checkbox);

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", border: '2px solid #282c34', backgroundColor: 'white', minWidth: '99vh', marginBottom: '50px' }}>

                {props.completed === false ? <h1 >{props.text}</h1> :
                    <span style={{ color: 'rgb(237,117,140)', textDecoration: 'line-through' }}><span style={{ color: 'black' }}><h1>{props.text}</h1></span></span>}
                {time}
                <CustomCheckbox
                    checked={props.completed}
                    onChange={handleChecked}
                />
                <CloseIcon
                    onClick={handleDelete}
                    onMouseEnter={handleMouseEnterCloseIcon}
                    onMouseLeave={handleMouseLeaveCloseIcon}
                    color="secondary"
                    weigh={closeIconSize}
                    style={{ height: "40px", marginTop: "24px" }}
                />
                <div>
                </div>
            </div>
        </>
    )
};

export default Task;
