import React, { useState } from 'react'

function TodoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInput(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        
    }

    function deleteTask() {

    }

    function moveTaskUp(index) {

    }



    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder='Enter a Task...' value={newTask} onChange={handleInput} />
                <button className='add-button' onClick={addTask} >Add</button>
            </div>
        </div>
    )
}
export default TodoList;