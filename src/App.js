import {useState} from 'react'
import Header from './conponents/Header'
import Tasks from './conponents/Tasks'
import AddTask from './conponents/AddTask'

function App() {
  const [showAddTask, setshowAddTask] = useState(true)
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Visit dentist',
    day: '13 March at 14:15',
    reminder: true,
    },
    { 
      id:2,
      text: 'Visit dentist',
      day: '13 March at 14:15',
      reminder: true,
      },
    {
    id: 3,
    text: 'Visit dentist',
    day: '13 March at 14:15',
    reminder: false,
    },
  ])
  
  const addTask = (task)=>{
    const id = Math.floor(Math.random()* 10000)+1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))
  }

  const toggleReminder =(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder : 
      !task.reminder} : task
      )
    )
  }

  return (
    <div className='container'>
       <Header onAdd={() => setshowAddTask(!showAddTask)}
          showAdd={showAddTask} />
       {showAddTask && <AddTask onAdd={addTask} />}
       
      {tasks.length>0 ? (
      <Tasks tasks ={tasks} onDelete = 
      {deleteTask} onToggle={toggleReminder}/> ): ('No Tasks to Show')}
     
    </div>
     
  )
}

export default App;
