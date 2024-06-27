import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faTrash, faX } from '@fortawesome/free-solid-svg-icons';

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onClickHandler = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="inputContainer">
      <input 
        id="iInput" 
        value={inputValue} 
        onChange={onChangeHandler} 
      />
      <button id="inputButton" onClick={onClickHandler}><FontAwesomeIcon icon={faPlus} /></button>
    </div>
  );
}

export default TodoInput;
