import styles from '../styles/AddTaskModal.module.css'
import {motion, AnimatePresence} from 'framer-motion'
import { useEffect, useState } from 'react'

const AddTaskModal = (props) => {

    const [tasks, setTasks] = useState([])
    const [taskTitle, setTaskTitle] = useState("")
    const [taskTime, setTaskTime] = useState("")
    const [taskColor, setTaskColor] = useState("pink")

   
      useEffect(() => {
            setTasks(JSON.parse(localStorage.getItem("todos")))
            console.log(tasks)
        }, [])
        
        const addItem = () => {
            tasks !== null ? setTasks(tasks.concat(
                {title: taskTitle, time: taskTime, color: taskColor, status: false}
        )) : setTasks(
            [{title: taskTitle, time: taskTime, color: taskColor, status: false}]
    )

            localStorage.setItem("todos", JSON.stringify(tasks))
            console.log(localStorage.getItem("todos"), "mabase")
        }
        
        return ( 
            
            <AnimatePresence>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addItem()
                    alert("task added")
                    props.close_add_task_modal
                    }}>        
                    <div>
                <div onClick={props.close_add_task_modal} className={styles.backdrop}>

            </div>
            <motion.div  className={styles.modal}
                         initial={{y:100}}
                         animate={{y:0}}
                         exit={{y:100}}
            >
                <div className={styles.title_input_container}>
                    <div style={{background: taskColor}} className={styles.project_color}></div>
                    <input className={styles.title_input} type="text" placeholder="Task Name" onChange={(e) => setTaskTitle(e.target.value)}/>
                </div>
                <div className={styles.dates_container}>
                    <div className={styles.date_container}>
                        {/* <div id={styles.calendarStart} className={styles.calendar_icon}>
                            <i className="bi bi-calendar"></i>
                        </div> */}
                            <input id={styles.calendarStart} className={styles.calendar_icon} type='datetime-local' onChange={(e) => setTaskTime(e.target.value)}/>
                        <div className={styles.dates_title_container}>
                            <p className={styles.date_title}>Start</p>
                            <p id={styles.dateStart} className={styles.date_time}>Today 3pm</p>
                        </div>
                    </div>
                    <div className={styles.date_container}>
                            <input id={styles.calendarEnd} className={styles.calendar_icon} type='datetime-local'/>
                        {/* <div id={styles.calendarEnd} className={styles.calendar_icon}>
                            <i className="bi bi-calendar"></i>
                        </div> */}
                        <div className={styles.dates_title_container}>
                            <p className={styles.date_title}>End</p>
                            <p id={styles.dateEnd} className={styles.date_time}>Today 3pm</p>
                        </div>
                    </div>
                    
                </div>
                <div className={styles.project_select_container}>
                    <span className={styles.projects_title}>Projects</span>
                    <div className={styles.projects_select}>                      
                        <input className={styles.project_color} style={{background: taskColor}} type='color' onChange={(e) => setTaskColor(e.target.value)}/>
                        <p className={styles.project_title}>Next JS</p>
                    </div>
                </div>
                <button type="submit" onClick={() => addItem()} className={styles.task_submit}><i className="bi bi-plus"></i></button>
            </motion.div> 
            </div>
            </form>

            </AnimatePresence>
            );
}
 
export default AddTaskModal;