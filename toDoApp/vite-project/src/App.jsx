import React,{useState, useEffect} from 'react';
import "./App.css";
import TaskForm from './Components/TaskForm';
import TaskColumn from './Components/TaskColumn';
import check_mark_img from './assets/check_mark_img.jpg';
import direct_hit_img from './assets/direct_hit_img.jpg';
import fire_img from './assets/fire_img.jpg';
import star_img from './assets/star_img.png';

// const oldTasks = localStorage.getItem('tasks');
// console.log(oldTasks);

const App = () => {
const oldTasks = localStorage.getItem('tasks');
const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
}

  return(
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn title="To do" icon={direct_hit_img} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn title="Doing" icon={star_img} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn title="Done" icon={check_mark_img} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )

}

export default App;
