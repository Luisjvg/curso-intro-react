import React from 'react'
import {TodoCounter} from '../components/TodoCounter/TodoCounter'
import { TodoSearch } from '../components/TodoSearch/TodoSearch';
import { TodoList } from '../components/TodoList/TodoList';
import { TodoItem } from '../components/TodoItem/TodoItem'
import { TodoForm } from "../components/TodoForm";
import { CreateTodoButton } from '../components/CreateTodoButton/CreateTodoButton' 
import { Modal } from '../modal'
import { TodosError } from '../TodosError'
import { TodosLoading } from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos'
import { TodoHeader} from '../components/TodoHeader'
import { useTodos } from './useTodos'
import { ChangeAlertWithStorageListener } from '../ChangeAlert'
import './App.css'

export function App(){
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal, 
    totalTodos,
    completedTodos,
    search,
    setSearch,
    addTodo,
    sincronizeTodos
  } = useTodos();

  return(
  <React.Fragment>
    <TodoHeader
    loading={loading}
    >
      <TodoCounter
        totalTodos={totalTodos}
        completedTodos={completedTodos}
      />
      <TodoSearch
        search={search}
        setSearch={setSearch}
        // loading={loading}
      />
    </TodoHeader>

    <TodoList
      error={error}
      loading={loading}
      searchedTodos={searchedTodos}
      totalTodos={totalTodos}
      searchText={search}
      sincronize={sincronizeTodos}
      onError={() => <TodosError/>}
      onLoading={() => <TodosLoading/>}
      onEmptyTodos={() => <EmptyTodos/>}
      onEmptySearchResult={(searchText) => <p>No hay resultados para {searchText}</p>}
      render={todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}  
          onComplete={() => {completeTodo(todo.text)}}
          onDelete={() => {deleteTodo(todo.text)}}
          />
        )}
    >
      {/* {todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}  
          onComplete={() => {completeTodo(todo.text)}}
          onDelete={() => {deleteTodo(todo.text)}}
          />
        )} */}
    </TodoList>
    
      {openModal && (
        <Modal>
          <TodoForm 
            setOpenModal={setOpenModal}
            addTodo={addTodo}
          />
        </Modal>
      )}

    <CreateTodoButton
      setOpenModal={setOpenModal}
    />

    <ChangeAlertWithStorageListener
      sincronize={sincronizeTodos}
    />
  </React.Fragment>
  )
}
