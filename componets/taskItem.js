import { useEffect, useState } from 'react';
import styles from '../styles/TaskItem.module.css'
import {motion} from "framer-motion"

const TaskItem = (props) => {
    const [done, setDone] = useState(false)

    useEffect(()=> 
    {setDone(props.status)
    }, [])
    
    return ( 
        <motion.span className="dont crash" animate={{background: done? "#000" : "rgba(146, 146, 146, 0.25)"}} onClick={() => {console.log(props.status) 
            setDone(!done)
        props.tap()}} className={styles.container}>
            <span className={styles.image_container} style={{ background: props.color}}>

            </span>
            <div className={styles.text_container}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
        </motion.span>
     );
}
 
export default TaskItem;