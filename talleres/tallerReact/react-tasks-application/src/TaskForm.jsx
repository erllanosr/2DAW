import { useState } from 'react'

function TaskForm({createTask}) {
  const [title, setTitle] = useState("")

  const handeSubmit = (e) => {
    e.preventDefault();
    
    createTask(title)
  }
  return (
    <div>
      <form onSubmit={handeSubmit}>
        <input placeholder='Nueva tarea...'
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm