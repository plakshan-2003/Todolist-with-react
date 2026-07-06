import React, { useState } from 'react'

function TodoList() {

    const [tasks, setTask] = useState(["Eat breackfest", "Take a Wash", "walk with dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInput(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

        if (newTask !== "") {
            setTask(t => [...t, newTask])
            newTask("");
        }

    }

    function deleteTask(index) {
      const updatedTask = tasks.filter((_, i)=> i !== index);
    //   setTask(updatedTask);
      
    }

    function moveTaskUp(index) {

        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
            // setTask(updatedTask)
        }
    }

    function moveTaskDown(index){
    if(index < tasks.length-1){
        const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
            // setTask(updatedTask);
    }
    }



    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a Task...' value={newTask} onChange={handleInput} />
                <button className='add-button' onClick={addTask}
                >Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delete-button' onClick={deleteTask(index)}>Delete</button>
                        <button className='move-button' onClick={moveTaskUp(index)}>Up</button>
                        <button className='move-button' onClick={moveTaskDown(index)}>Down</button>
                    </li>
                )}
            </ol>

        </div>
    )
}
export default TodoList;