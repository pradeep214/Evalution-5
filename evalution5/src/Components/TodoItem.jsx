import React from 'react'
import './Todoitem.css'
function TodoItem({list, removeItem}) {
  return (
    <div className='list'><ul>
        
        {list.map((e, index)=>{
            return(
                <li key={index}>
                   <h3> {e}</h3>
                    <button onClick={()=>removeItem(index)}>Remove</button>
                </li>
            )
        })}
      
        </ul></div>
  )
}

export default TodoItem