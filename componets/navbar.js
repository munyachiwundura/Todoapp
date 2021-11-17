import Link from "next/link"
import styles from '../styles/Navigation.module.css'


const Navbar = (props) => {
    return ( 
        <nav className={styles.nav}>
            <Link href="/">
                <i className="bi bi-house"></i>
            </Link>
            <Link href="/analytics/">
                <i className="bi bi-kanban"></i>
            </Link>
            
            <Link href="/">
                <i id={styles.addButton} onClick={props.open_add_task_modal} className="bi bi-plus-lg"></i>
            </Link>
            <Link href="/calendar/">
                <i className="bi bi-calendar3"></i>
            </Link>
            <Link href="/profile/">
                <i className="bi bi-person"></i>
            </Link>
        </nav>
     );
}
 
export default Navbar;