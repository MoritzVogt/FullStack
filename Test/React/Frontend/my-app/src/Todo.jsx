import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faX } from '@fortawesome/free-solid-svg-icons';

function Todo({ task, completed, toggleComplete, deleteTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {task}
      </span>
      <button onClick={toggleComplete}>
        {completed ? <FontAwesomeIcon icon={faX} />:<FontAwesomeIcon icon={faCheck} />}
        
      </button>
      <button onClick={deleteTodo}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Todo;
