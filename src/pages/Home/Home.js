import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className="todo-gif-container">
        <img className="todo-gif" src="images/todo-gif.gif" />
      </div>
      <div className="get-started-button"><Link to="/todos"><a class="waves-effect waves-light btn">Get Started</a></Link></div>
    </div>
  )
}

export default Home