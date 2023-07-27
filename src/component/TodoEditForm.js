import React, { useState } from 'react'

function TodoEditForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={value} placeholder='UpDate Task' onChange={(e) => setValue(e.target.value)} />
     <button type='submit'>Update task</button>
      </form>
    </div>
  )
}

export default TodoEditForm