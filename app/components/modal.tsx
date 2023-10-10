import React from "react"

interface ModalProps {
    openMadal: boolean
    setOpenModal: () => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ openMadal, setOpenModal, children }) => {
    return (
        <dialog id="my_modal_3" className={`modal ${openMadal ? "modal-open" : ""}`}>
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => { setOpenModal(false) }}>✕</button>
                </form>
                {children}
            </div>
        </dialog>
    )
}

export default Modal