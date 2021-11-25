import Calendar from "react-calendar"
import styles from '../styles/CalendarPage.module.css'

const CalendarPage = () => {
    return ( 
        <div className={styles.page}>
            <Calendar/>
        </div>
     );
}
 
export default CalendarPage;