import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const Inputform =({input,setInput,setTodos,todos})=> {
    const submitTodo =(e)=>{
        e.preventDefault()
        setTodos([...todos,{text:input,completed:false,id:uuidv4()}])
        setInput('')
    }
    return (
      <div className='input-wrapper'>
        <input value={input} type="text"  onChange={(e)=>{setInput(e.target.value)}} placeholder='Type in your todo!'/>
        <button  onClick={submitTodo} />
      </div>
    )
  
}
export default Inputform