import React, { useState, useEffect } from 'react'
import ApiConfig from '../../api/ApiConfig'
import { useHistory } from "react-router-dom";
import { simpleGetCall, simplePostCall } from '../../api/ApiServices'
import { AiFillDelete } from 'react-icons/ai';
import { AiFillEdit } from 'react-icons/ai'
import { toast } from 'react-toastify';
import './Todos.css'

const Todos = () => {
  const history = useHistory()

  const [todos, setTodos] = useState([])

  const getAllTodos = async () => {
    const getAllTodosUrl = ApiConfig.GET_ALL_TODOS
    const result = await simpleGetCall(getAllTodosUrl)
    setTodos(result.data.todos)
  }

  useEffect(() => {
    getAllTodos();
  }, [])

  const deleteClickedTodo = async (todoId) => {
    const deleteTodoUrl = ApiConfig.DELETE_TODO + todoId
    const result = await simplePostCall(deleteTodoUrl)
    if (result.data.status === 'Success') {
      toast.success('Todo deleted successfully')
    } else {
      toast.error('Unable to delete todo')
    }
  }

  const editClickedTodo = async (todo) => {
    // history.push('/create')
    history.push({
      pathname: '/todo-details',
      state: { todoId: todo, isEdit: true }
    });

    // sessionStorage.setItem('updatedTodo', todo._id)
  }

  return (
    <div>
      <h2 className="your-todos-title">Your Todos</h2>
      <div className="your-todos-container">
        {
          todos.map((todo) =>
            <div style={{ width: 500 }} class="card">
              <div className="edit-delete-button-container">
                <AiFillDelete size={35} onClick={() => deleteClickedTodo(todo._id)} />
                <AiFillEdit size={35} onClick={() => editClickedTodo(todo)} />
              </div>
              <div class="card-image waves-effect waves-block waves-light">
                <img style={{ height: 100, width: 200 }} class="activator" src="images/todo-gif.gif" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">Title: {todo.title}<i class="material-icons right">View Todo</i></span>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Title: {todo.title}<i class="material-icons right">close</i></span>
                <p>Description: {todo.description}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Todos