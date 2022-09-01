import {useState} from 'react'
import TodoContainer from './components/TodoContainer.js'
import Inputform from './components/Inputform.js'
import './styles/app.scss'

function App() {
  const [todos,setTodos]=useState([])
  const [input,setInput] = useState('')
  return (
    <div className="App">
      <Inputform input={input} setInput={setInput} setTodos={setTodos} todos={todos}/>
      <TodoContainer todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
