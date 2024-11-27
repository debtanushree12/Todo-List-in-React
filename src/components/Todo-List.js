import React, { useState, useEffect } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Load todos from localStorage when the app loads
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // Function to update localStorage whenever todos state changes
  const updateLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newTask = { text: inputValue.trim(), completed: false };
      const updatedTodos = [...todos, newTask];
      updateLocalStorage(updatedTodos);
      setInputValue('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    updateLocalStorage(updatedTodos);
  };

  const handleDeleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    updateLocalStorage(updatedTodos);
  };

  return (
    <div>
      <h1 className='my-4 text-center'>To-Do List</h1>
      <div className='container d-flex text-center my-4' style={{flexDirection:'column'}}>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a new task"
        />
        <button className='btn btn-primary mx-2' type="submit">Add Task</button>
      </form>
      <div className='container'style={{display:'block',justifyContent:'center',marginTop:'20px',width:'300px'}}>
      <ul>
        {todos.map((todo, index) => (
          <li 
            key={index}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              color: todo.completed ? 'gray' : 'black'
            }}
          >
            {todo.text}
            <button  className='btn btn-success mx-2 my-2' onClick={() => handleToggleComplete(index)}>
              {todo.completed ? 'Undo' : 'Done'}
            </button>
            <button className='btn btn-danger mx-2' onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
     
      </div>
    </div>
  );
}

export default TodoList;
