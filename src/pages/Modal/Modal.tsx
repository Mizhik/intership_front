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
        <div className="modal">
          <div>{children}</div>
          <button onClick={onClose}>Close</button>
        </div>,
        element
      )
    : null
}
