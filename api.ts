import { ITask } from "./types/todo";

const BaseURL = 'http://localhost:3001';

export const AllToDo = async (): Promise<ITask[]> => {
    const res = await fetch(`${BaseURL}/Task`, { cache: 'no-store' });
    const todos = await res.json();
    return todos
}

export const AddNewTodo = async (todo: ITask): Promise<ITask> => {
    const res = await fetch(`${BaseURL}/Task`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}
