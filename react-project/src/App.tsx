import { useState } from 'react'
import './main.css'
import Todo from './components/todo'
import TodoForm from './components/todoForm'
import Search from './components/search'

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: 'Criar funcionalidade x no sistema',
      category: 'Trabalho',
      isCompleted: false
  },
  {
      id:2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false
  },
  {
      id:3,
      text: 'Estudar ReactJs',
      category: 'Estudos',
      isCompleted: false
  },
  ])

  const[search, setSearch]=useState('')



  const removeTodo = (id:any)=>{
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(i => i.id !==id ? i : null);

    setTodos(filteredTodos)
  }

  const completeTodo = (id:any)=>{
    const newTodos = [...todos]
    newTodos.map((i)=>{
      i.id === id ? i.isCompleted = !i.isCompleted : i 
    })
    setTodos(newTodos)
  }

  const addTodo = (text:any, category:any)=>{

    const newTodos = [... todos, 
      {
        id: Math.floor(Math.random()*10000),
        text: text,
        category: category,
        isCompleted: false
      },
    ];
    
    setTodos(newTodos)
  }

  return (
    <div id='main'>
      <h1>Lista de afazeres</h1>
      <TodoForm addTodo={addTodo}/>
      <Search search={search} setSearch={setSearch}/>
      <div className="todoList">
        {todos.filter((i)=> i.text.toLowerCase().includes(search.toLowerCase())).map((i)=>(
          <Todo i={i} key={i.id} remTd={removeTodo} compTd={completeTodo} />
        ))}
      </div>

    </div>
  )
}

export default App
