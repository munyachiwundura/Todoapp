import Head from "next/head";
import AddTaskModal from "./addTaskModal";
import Navbar from "./navbar";
import TitleBar from "./titlebar";
import { createContext, useState, useEffect } from "react";




const Layout = ({children}) => {

    const todos = {todo: [
        {title: "Pharmacology Prac", time: "9:00 AM", color: "#afe5c1", status: true},
        {title: "Pharmacology Prac", time: "9:00 AM", color: "#afe5c1", status: true},
      ],
    sad : 'pakaipa'
    }

    const TodoContex = createContext(todos)
    

    const [addTask, setAddTask] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect (() => {
        window.innerWidth > 800? setIsMobile(false) : setIsMobile(true)
        console.log(window.innerWidth)
    }, []
    )

    return ( 
            <TodoContex.Provider value={todos.todo}>
        <div className="page">
            <Head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css"></link>
            </Head>
            {/* <TitleBar/> */}

            {children}

            {addTask && <AddTaskModal close_add_task_modal={() => setAddTask(false)}/>}
            <Navbar mobile={isMobile} open_add_task_modal={() => setAddTask(true)}/>
        </div>
        </TodoContex.Provider>
     );
}
 
export default Layout;