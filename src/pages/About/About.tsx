import { useState } from "react"
import Modal from "../Modal/Modal.tsx"
import "./About.css"

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <h1>Про нас</h1>
      <p>Це сторінка "Про нас".</p>
      <button onClick={() => setIsModalOpen(true)}>
        Відкрити модальне вікно
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Вміст модального вікна</h2>
        <p>Це деякий вміст модального вікна.</p>
      </Modal>
    </div>
  )
}

export default About
