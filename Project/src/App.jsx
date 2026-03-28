import { useState, useEffect } from 'react'
import './App.css'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(() => {
    let save = localStorage.getItem("todos")
    return save ? JSON.parse(save) : []
  })
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  // const [Finished, setFinished] = useState(true)


  // ADD TODO
  const AddBtn = () => {
    if (todo.trim() === "") return
    setTodos([...todos, { text: todo, }])
    setTodo("")
  }

  // Delete TODO
  const deleteTodo = (index) => {
    const newTodos = todos.filter((t, i) => i !== index)
    setTodos(newTodos)
  }

  // Edit TODO
  const editTodo = (e) => {
    const newText = prompt(`Edit your todo`)
    if (!newText || newText.trim() === "") return
    const newTodos = [...todos]
    newTodos[e].text = newText
    setTodos(newTodos)
  }


  return (
    <>
      <div className="Box">
        <div className="Heading">
          <h1>TODO</h1>
        </div>

        <div className="main-container">


          <div className="first">
            <input className='input' type="text" placeholder='Enter Your Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button id='btn-1' onClick={AddBtn}>Add</button>
          </div>



          {/* <div className="check">
            <input className='checkbox' type="checkbox" /> Show Finished
          </div> */}


          <br />
          <hr />


          <div className="all-todos">
            <h3>Your Todos</h3>


            <div className="get-all-todos">
              {todos.map((e, index) => {
                return <div key={index} className='todo-name'>{e.text}
                  <div className="icon">
                    <button onClick={() => { editTodo(index) }}><i className="ri-file-edit-fill"></i></button>
                    <button id='btn-3' onClick={() => { deleteTodo(index) }}><i className="ri-delete-bin-fill"></i></button>
                  </div>
                </div>

              })}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
