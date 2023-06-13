import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const handleTodoToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="toggle-mode-container">
        <button className="toggle-mode-button" onClick={handleToggleDarkMode}>
          <img
            src={isDarkMode ? "/moon.png" : "/sun.png"}
            alt={isDarkMode ? "Moon" : "Sun"}
            className="mode-image"
          />
        </button>
      </div>
      <div className="todo-list-container">
        <h1>Todo List</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} className={todo.completed ? "completed" : ""}>
              <div>
                <button
                  className="complete-button"
                  onClick={() => handleTodoToggleComplete(index)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleTodoDelete(index)}
                >
                  Delete
                </button>
              </div>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
