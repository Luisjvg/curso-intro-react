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

  /*Array donde preguntaremos si el valor total del array es mayor o igual a 1.
  
  En caso de no se así, mostraremos los "todos" que incluyan alguna letra del searchText*/
  let searchedTodos = [];

  if (!search.length >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = search.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  /*Funcion con parametro (texto), aqui buscaremos en el index de los "todos" si el todo.text es igual a el texto que le pasemos*/
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);

  };

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
        {searchedTodos.map(todos => (
          <TodoItem 
          key={todos.text} 
          text={todos.text}
          completed={todos.completed}  
          onComplete={() => {completeTodo(todos.text)}}
          onDelete={() => {deleteTodo(todos.text)}}
          />
          ))}  
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
