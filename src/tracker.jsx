import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "./tracker.css"
export default function Tracker(){
  let[task,setTask] = useState([{ta:"20 DSA Questions",id:uuidv4(),isdone:false}])
  let [newtask,setnewTask] = useState("") 


  let mark = (id) => {
    setTask(
        task.map((tasks) => {
            if (tasks.id === id) {
                return {
                    ...tasks,
                    isdone: true
                };
            } else {
                return tasks;
            }
        })
    );
};

  let addtask = () => {
    setTask([...task,{ta:newtask,id:uuidv4(),isdone:false}])
    setnewTask("")
  }

  let deltask = (id) => {
    setTask(task.filter((tasks)=>(tasks.id != id)))
  }
  let markall = () => {
       setTask(task.map((tasks)=>{
        return{...tasks,isdone:true}
       }))
    }
    

   return (
  <div className="main">

    <div className="tracker">

      <h1> </h1>
    <h3>Add Task To Crack the interview</h3>
      <input
        type="text"
        placeholder="Enter your task"
        value={newtask}
        onChange={(e) => setnewTask(e.target.value)}
      />

      <button onClick={addtask}>Add Task</button>

      <ul>
        {task.map((tasks) => (
          <li key={tasks.id}>
            <span
              style={{
                textDecoration: tasks.isdone ? "line-through" : "none",
              }}
            >
              {tasks.ta}
            </span>

            <div className="btns">
              <button onClick={() => mark(tasks.id)}>
                Mark
              </button>
              
              <button onClick={() => deltask(tasks.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button className="markall" onClick={markall}>
        Mark All Done
      </button>

    </div>
  </div>
);
    }
