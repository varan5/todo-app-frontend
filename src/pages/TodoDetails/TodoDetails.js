import React, { useState, useEffect } from 'react'
import './TodoDetails.css'
import { Link, useParams, useLocation } from 'react-router-dom'
import ApiConfig from '../../api/ApiConfig'
import { simplePostCall } from '../../api/ApiServices'
import { toast } from 'react-toastify'

const TodoDetails = () => {
  const location = useLocation()
  const isEdit = location.state
  const [todoTitle, setTodoTitle] = useState(isEdit ? location.state.todoId.title : '')
  const [todoDescription, setTodoDescription] = useState(isEdit ? location.state.todoId.description : '')

  useEffect(() => {
    toast.success(isEdit ? 'Edit todo' : 'Create todo')
  }, [])


  const createTodo = async () => {
    const createTodoUrl = ApiConfig.CREATE_TODO
    const todoBody = {
      title: todoTitle,
      description: todoDescription
    }
    const result = await simplePostCall(createTodoUrl, todoBody)
    if (result.data.status == 'Success') {
      toast.success(`Todo ${isEdit ? 'updated' : 'created'}  successfully`)
      setTodoTitle('')
      setTodoDescription('')
    } else {
      toast.error('Unable to create todo')
    }
  }

  return (
    <div>
      <div class="row">
        <form class="col s12">
          <div className="text-area-container">
            <div class="input-field col s12">
              <textarea value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)} style={{ width: '400px' }} id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Todo Title</label>
            </div>
            <div class="input-field col s12">
              <textarea value={todoDescription} onChange={(event) => setTodoDescription(event.target.value)} style={{ width: '400px' }} id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Todo Description</label>
            </div>
          </div>
          <a onClick={createTodo} class="waves-effect waves-light btn">{isEdit ? 'Edit' : 'Create' } Todo</a>
          <div className="todo-gif-container">
            <img style={{ width: '240px', height: '140px' }} className="todo-gif" src="images/todo-gif.gif" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoDetails