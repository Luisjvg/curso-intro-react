import React from 'react';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', complete: false},
  { text: 'Tomas el curso de intro a React', complete: false},
  { text: 'Llorar con la llorona', complete: false},
]

function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter/> */}
        <h2>Has completado 2 de 3 TODOs</h2>
      {/* <Todosearch/> */}
        <input placeholder='Cebolla'/>
      {/* <TodoList> */}
        {/* {todos.map(todos => (
          <TodoItem/>
        ))} */}
      {/* </TodoList> */}

      {/* <CreateTodoButton/> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
