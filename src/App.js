import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', complete: true},
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
          <TodoItem 
          key={todos.text} 
          text={todos.text}
          completed={todos.complete}  
          />
          ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
