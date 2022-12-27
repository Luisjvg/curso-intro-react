import React from "react";
import { useLocalStorage } from './useLocalStorage'

export function useTodos(){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', [])
    
      
      const [search, setSearch] = React.useState('')
      const [openModal, setOpenModal] = React.useState(false)

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
      const addTodo = (text) => {
        const newTodo = [...todos];
        newTodo.push({
          completed: false,
          text,
        })
        saveTodos(newTodo);
      };
      
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
    
    return({
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        })
}