import React from 'react'
import {TodoCounter} from '../components/TodoCounter/TodoCounter'
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton' 
import { Modal } from '../modal'

export function AppUI(){
    const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext)

    return(
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>

          <TodoList>
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
  
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
      
        {openModal && (
          <Modal setOpenModal={setOpenModal}/>
        )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        
      />
    </React.Fragment>
    )
}