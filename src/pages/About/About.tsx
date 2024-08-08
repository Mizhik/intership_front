import { useEffect, useState } from "react"
import Modal from "../Modal/Modal.tsx"
import "./About.css"
import { getPosts } from "../../api/healthcheck.ts"

interface Result {
  message: string
}

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [posts, setPosts] = useState<Result | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
      .then((response: Result) => {
        setPosts(response)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>Про нас</h1>
      {loading ? (
        <p>Завантаження...</p>
      ) : (
        <p>{posts ? posts.message : "Немає даних"}</p>
      )}
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
