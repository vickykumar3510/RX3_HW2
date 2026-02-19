import { useSelector, useDispatch } from "react-redux";
import { statusUpdateBtn } from "./taskSlice";

const Tasks = () => {
    const dispatch = useDispatch()

    const tasks = useSelector((state) => {    
        console.log(state.tasks)
        return state.tasks
    })
    return (
        <div>
            {
                tasks.tasks.map((task, index) => (
                    <div key={index}>
                        <h3>{task.date}</h3>
                        <ul>
                            {task.tasks.map((t) => (
                                <li key={t.id}>
                                   <p>{t.task}</p>
                                   <button onClick={() => dispatch(statusUpdateBtn({ date: task.date, id: t.id}))}>{t.status}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

export default Tasks