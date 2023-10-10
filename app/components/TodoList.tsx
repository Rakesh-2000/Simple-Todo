import { ITask } from "@/types/todo"
import React from "react"
import Task from "./Task"

interface TodoProps {
    tasks: ITask[]
}

const TodoList: React.FC<TodoProps> = ({ tasks }) => {
    return (
        <div className="mt-10">
            <div className="overflow-x-auto ">
                <table className="table">
                    <thead>
                        <tr>
                            <th>TASK</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task) => <Task key={task.id} task={task} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoList
