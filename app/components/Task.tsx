import { ITask } from "@/types/todo"

interface taskProps {
    task: ITask
}

const Task: React.FC<taskProps> = ({ task }) => {
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td>Quality Control Specialist</td>
        </tr>
    )
}

export default Task