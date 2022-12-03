import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
// import './App.css';

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem('itemName', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else{
    parsedItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parsedItem)
  
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  }

  return [
    item,
    saveItem,
  ];
}


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])

  
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
    const newTodo = [...todos];
    newTodo[todoIndex].completed = true
    saveTodos(newTodo);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);

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

