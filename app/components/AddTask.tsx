'use client'

import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./modal";
import { FormEventHandler, useState } from "react";
import { AddNewTodo } from "@/api";
import { useRouter } from "next/navigation";
const AddTask = () => {
    const router = useRouter();
    const [openMadal, setOpenModal] = useState<boolean>(false);
    const [newTask, setNewtask] = useState<string>('');
    const testing = newTask
    console.log("-=-=-=-=-=-=-", testing);

    const handleAddit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        await AddNewTodo({
            id: "11",
            text: newTask
        });
        console.log(newTask)
        // setNewtask('')
        setOpenModal(false)
        router.refresh()
    }

    return (
        <div>
            <button className="btn btn-primary mt-10 w-80" onClick={() => { setOpenModal(true) }}>
                Add Task
                <AiOutlinePlus />
            </button>
            <Modal openMadal={openMadal} setOpenModal={setOpenModal} >
                <form onSubmit={handleAddit}>
                    <div className="modal-action">
                        <input
                            value={newTask}
                            onChange={(e) => setNewtask(e.target.value)}
                            type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                        <button type="submit" className="btn">ADD +</button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default AddTask