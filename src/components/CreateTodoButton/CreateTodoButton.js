import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  function activeButton(){
      props.setOpenModal(prevState => !prevState)
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