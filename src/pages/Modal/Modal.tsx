import { ReactNode } from "react"
import "./Modal.css" // Припустимо, що у вас є базові стилі для модального вікна

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button onClick={onClose}>Закрити</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
