import { useEffect, useState } from 'react';
import styles from '../styles/TaskItem.module.css'

const TaskItem = (props) => {
    const [done, setDone] = useState(props.status)
    
    return ( 
        <div onClick={() => {console.log(props.status) 
            setDone(!done)
        props.tap()}} className={styles.container}>
            <span className={styles.image_container} style={{ background: props.color}}>

            </span>
            <div className={styles.text_container}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
            {done && <p>done</p>}
        </div>
     );
}
 
export default TaskItem;