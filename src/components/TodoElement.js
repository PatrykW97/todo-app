import React from 'react'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const TodoElement =({todos,setTodos,todo})=>{
    const deleteTodo = ()=>{
        setTodos(todos.filter((element)=> element.id !== todo.id ))
        console.log(todo.id)
    }
    const checkTodo =()=>{

    }
    return (
      <div className='todo-container'>
      <div className='todo-wrapper'>
        {todo.text}
        <FontAwesomeIcon
          className='done'
          onClick={checkTodo}
          size="2x"
          icon={faCheck}
        />
        <FontAwesomeIcon
          className='Delete'
          onClick={deleteTodo}
          size="2x"
          icon={faTrash}
        />
      </div>
      </div>
    )
  
}
export default TodoElement