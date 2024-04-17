import { useState } from "react"
import { ModalRegistration } from "../modals/modalRegistration/ModalRegistration"

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onOpenModalHandler = () => {
        setIsModalOpen(true)
    }

    const onCloseModalHandler = () => {
        setIsModalOpen(false)
    }
    return (
        <div>
            <button>MY WISHLIST</button>
            <button>О сервисе</button>
            <button onClick={onOpenModalHandler}>Войти</button>
            {isModalOpen && <ModalRegistration onCloseModalHandler={onCloseModalHandler}/>}
        </div>
    )
}