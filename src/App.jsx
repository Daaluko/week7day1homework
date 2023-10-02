import { useState } from 'react'
import './App.css'

function App() {
  
  const [toDoList, setToDoList] = useState ([
    "Buy shopping", "Clean bathroom", "Car's MOT"
    ]
  )

  const [newToDo, setNewToDo] = useState("")


  const listedToDos = toDoList.map((todo, index) => {
    return(
      <li key={index}>
        <span>{todo}</span>
      </li>)
  })

  const inputForTask = (event) => {
    setNewToDo(event.target.value)
  }

  const saveNewToDo = (event) => {
    event.preventDefault()
    const copyToDoList = [...toDoList]
    copyToDoList.push(newToDo)
    setToDoList(copyToDoList)
    setNewToDo("")
  }

  return (
    <>
      <h1>ToDo's</h1>
      <br></br>
      <form onSubmit={saveNewToDo}>
        <label className="newtasklabel" htmlFor='new-to-do'>Add new task:</label>
        <input className='textbox' type="text" id="new-to-do" value={newToDo} onChange={inputForTask} />
        <button className="button" type="submit" value={saveNewToDo}>Save task</button>
      </form>
      <br></br>
      <ul>
        {listedToDos}
      </ul>
    </>
  )
}

export default App
