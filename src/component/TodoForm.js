import React, { useState } from 'react'



function TodoForm({addTodo}) {
    const [value,setValue]=useState("");
   const handleChange=(e)=>{
    setValue(e.target.value)
   };
   const handleSubmit=(e)=>{
   e.preventDefault()
   addTodo(value)
   setValue("")
   }
  return (
    <div>
        <form className='todo-form'onSubmit={handleSubmit}>
    <input value={value} className='todo-input' placeholder='Enter The To-do Here' onChange={handleChange}/>
    <button>Add</button>
        </form>
    </div>
  )
}

export default TodoForm