import styles from '../styles/pageLoader.module.css'
import Rive from "rive-react"
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const PageLoader = (props) => {

    const [leave, setLeave] = useState(props.leave)

    return ( 
        <AnimatePresence>

        <motion.div  transition={{delay: 2.7}} animate={{y: "-100vh" }}>
    <motion.div transition={{delay: 2.5}} animate={{opacity:0 }} className={styles.backdrop}>
        <motion.div transition={{delay: 2}} animate={{y: "-100vh" }} className={styles.loader}>
            <Rive src="todologo.riv"/>
        </motion.div>
    </motion.div> 
    </motion.div>
        </AnimatePresence>
      
    );
}
 
export default PageLoader;