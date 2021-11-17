import styles from '../styles/TaskItem.module.css'

const TaskItem = (props) => {
    return ( 
        <div className={styles.container}>
            <span className={styles.image_container} style={{ background: props.color}}>

            </span>
            <div className={styles.text_container}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
        </div>
     );
}
 
export default TaskItem;