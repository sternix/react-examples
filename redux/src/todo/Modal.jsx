import { useSelector } from "react-redux"
import modals from "../modals"
import { closeModal } from "../stores/modal"

function Modal() {
    const { name, data } = useSelector(state => state.modal)
    const modal = modals.find(m => m.name === name)
    const close = () => {
        dispatchEvent(closeModal())
    }

    return (
        <div>
            <modal.element close={close} data={data} />
        </div>
    )
}

export default Modal