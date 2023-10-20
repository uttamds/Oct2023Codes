import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask';

const App = ()=> {
  const [showAddTask, setShowAddTask]  = useState(false) 
  const [tasks, setTasks] = useState(
    [
       {
           id: 1,
           text: 'Doctors Appt',
           day: 'Feb 4',
           reminder: true,
   
       },
       {
           id: 2,
           text: 'Wash Car',
           day: 'Feb 4',
           reminder: true,
   
       },
       {
        id: 3,
        text: 'Meet John',
        day: 'Feb 8',
        reminder: false,

    },
    {
      id: 4,
      text: 'Write the mail',
      day: 'Feb 8',
      reminder: false,

  }
    
   ])
   //add task
   const addTask=(task)=>{
      const id = Math.floor(Math.random()*10000 + 1)
      const newTask = {id, ...task}
      setTasks([...tasks, newTask])
   }

  const deleteTask=(id)=>{
      setTasks(tasks.filter((task) => task.id !== id))
     

  }

  //toggle reminder

  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className= 'container'>
       <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
       {showAddTask && <AddTask onAdd={addTask}/>}
       {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks to Show') }
      
    </div>
  );
}

export default App;
