import React from 'react';
import '../task-count-bubble/task-count-bubble.css';

function TaskCount(props){
    return (
        <p className={"speech-bubble speech-bubble:after"}>You have {props.count} tasks!</p>
    )
}

export default TaskCount;