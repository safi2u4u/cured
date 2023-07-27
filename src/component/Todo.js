import React from 'react'

function Todo({task,deleteTodo,editTodo}) {
  return (
    <div>
   <p>{task.task}</p>
   <button onClick={()=>deleteTodo(task.id)}>Delete</button>
   <button  onClick={()=>editTodo(task.id)}>Edit</button>
    </div>
  )
}

export default Todo