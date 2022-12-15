import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  function activeButton(){
      props.setOpenModal(true)
  }

  return (
    <button 
      className="CreateTodoButton"
      onClick={activeButton}
    >
      +
      
    </button>
  );

}
export { CreateTodoButton };