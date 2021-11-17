import styles from '../styles/TasksProgress.module.css'

const TasksProgress = (props) => {
    return ( 
        <div className={styles.container}>
        <p className={styles.title}>Todays Tasks Progress</p>
        <span className={styles.progress}>{props.done}/{props.total} completed</span>
        <div className={styles.progress_bar}>
          <span className={styles.progress_indicator} style={{width: props.progress}}></span>
        </div>
        </div>
     );
}
 
export default TasksProgress;