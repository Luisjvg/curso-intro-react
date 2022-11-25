import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem'
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', complete: false},
  { text: 'Tomas el curso de intro a React', complete: false},
  { text: 'Llorar con la llorona', complete: false},
  { text: 'LALALALALA', complete: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        {todos.map(todos => (
          <TodoItem key={todos.text} text={todos.text}/>
          ))}
      </TodoList>
      {/* <CreateTodoButton/> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
