import React from 'react'
import {TodoCounter} from '../components/TodoCounter/TodoCounter'
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton' 
import { Modal } from '../modal'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos'


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
          {error && <TodosError error={error}/>}
          {loading && <TodosLoading />}
          {(!loading && !searchedTodos.length) && <EmptyTodos />}
  
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
          <Modal>
					  <TodoForm />
				  </Modal>
        )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        
      />
    </React.Fragment>
    )
}