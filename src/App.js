import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
// import './App.css';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomas el curso de intro a React', complete: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'LALALALALA', completed: false},
]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos)
  const [search, setSearch] = React.useState('')
  
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch
        search={search}
        setSearch={setSearch}
      />
      <TodoList>
        {todos.map(todos => (
          <TodoItem 
          key={todos.text} 
          text={todos.text}
          completed={todos.completed}  
          />
          ))}  
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
