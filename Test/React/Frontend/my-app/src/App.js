import "./App.css";
import TodoInput from "./Components/Input/TodoInput";
import Todo from './Todo';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), task: "Einkaufen", completed: false },
    { id: uuidv4(), task: "Laufen", completed: false }
  ]);

  const addTodo = (task) => {
    setTodos([...todos, { id: uuidv4(), task, completed: false }]);
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="inputContainer">
        <TodoInput addTodo={addTodo} />
      </div>
      <h1>Todo-App</h1>
      <div className="todoContainer">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
