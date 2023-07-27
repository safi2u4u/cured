import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import { v4 as uuid4 } from 'uuid';
import TodoEditForm from './TodoEditForm';
uuid4();


function TodoWrraper() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuid4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    };

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    };

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
        } : todo))
    }
    return (
        <div>
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo} />
            {
                todos.map((todo, index) => (
                    todo.isEditing ? (
                        <TodoEditForm editTodo={editTask} task={todo} />
                    ) : (
                        <Todo task={todo} key={index} deleteTodo={deleteTodo}
                            editTodo={editTodo} />
                    )

                ))
            }
        </div>
    )
}

export default TodoWrraper