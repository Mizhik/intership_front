import { ReactNode } from "react"
import "./Modal.css"
import { createPortal } from "react-dom"

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const element = document.querySelector("#modal")

  return element && isOpen
    ? createPortal(
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>,
        element
      )
    : null
}
