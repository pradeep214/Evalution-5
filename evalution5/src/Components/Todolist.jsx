import React, { useState } from 'react'
import TodoItem from './TodoItem'

function Todolist() {
const storedValue = JSON.parse(localStorage.getItem("todos")) || []
    const [list, setlist] = useState(storedValue)
    const [newlist, setNewlist] = useState("")



    function TodoAdd(){
        const storing = [...list, newlist]
        if(newlist !== ""){
            setlist(storing)
            localStorage.setItem("todos",JSON.stringify(storing))
            setNewlist("")
        }
    }

    function remove(index){
        const update = [...list]
        update.splice(index,1)
        setlist(update)
        localStorage.setItem("todos",JSON.stringify(update))
    }

  return (
    <div className='container'><h1>
        MY Todo List</h1>
    <input type="text"
    value={newlist} 
    onChange={(e)=>setNewlist(e.target.value)}/>
    <button onClick={TodoAdd}>ADD</button>
        <TodoItem list = {list} removeItem = {remove}/>
        </div>
  )
}

export default Todolist