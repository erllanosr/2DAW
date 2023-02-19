import TaskList from './TaskList'
import TaskForm from './TaskForm'
import { tasks as data } from './tasks'
import { useState, useEffect } from 'react'
function App() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  function createTask(taskTitle) {
    setTasks([...tasks, {
      title: taskTitle,
      id: tasks.length,
      description: "Nueva tarea"
    } ]) //del arreglo que ya tenemos creado, añade una tarea nueva
  }
  return (
    <>
      <TaskForm createTask={createTask}></TaskForm>
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App