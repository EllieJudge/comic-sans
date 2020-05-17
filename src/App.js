import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import AddTodo from './components/add-todo/add-todo';
import TaskCountBubble from './components/task-count-bubble/task-count-bubble';
import Heart from './components/heart/heart';
// import ExampleTask from './components/example-task/example-task';
import Task from './components/task/task';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([
    {
      task: "Do some yoga",
      completed: false,
      id: uuidv4(),
    },
    {
      task: "Eat some dinner",
      completed: false,
      id: uuidv4()
    },
    {
      task: "Pick up stuff from house",
      completed: false,
      id: uuidv4()
    },
    {
      task: "Learn backend",
      completed: false,
      id: uuidv4(),
    },
    {
      task: "Add task functionality",
      completed: false,
      id: uuidv4()
    },

  ]);

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id === id ? false : true;
    })
    setTasks(filteredTasks);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, {
      task: newTask,
      completed: false,
      id: uuidv4()
    },])
  }


  function completeTask(id, checked) {
    console.log('checked', checked)
    const updatedTasks = tasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    })

    setTasks(updatedTasks);
  }

const incompleteTasks = tasks.filter((task) => !task.completed)
// console.log('incomplete',incompleteTasks)

  return (
    <div className="App">
      <header className="App-header">
        <TaskCountBubble count={incompleteTasks.length} /> {/* add logic here for completed tasks */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Header title={"Todo-do da do!"} />
        <AddTodo text={"Add a todo: "} addTaskFunc={addTask} />
        <Heart />
      </header>
      <main>
        {/* <ExampleTask text={"I am your first Todo!"}/> */}
        {tasks.map((task) => {
          return <Task text={task.task} key={uuidv4()} id={task.id} completed={task.completed} deleteTaskFunc={deleteTask} completeTaskFunc={completeTask} />
        })}
      </main>
    </div>
  );
}

export default App;
