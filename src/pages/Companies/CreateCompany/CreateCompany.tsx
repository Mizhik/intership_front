import { useState } from "react"
import { WorkFlowCompany } from "../../../interfaces"
import { CreateCompany } from "../../../api/company/company"
import Modal from "../../Modal/Modal"

const СreateCompany = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [is_visible, setIs_visible] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleCreateCompany = async () => {
    if (!name || !description) {
      setError("All fields are required")
      return
    }

    const createData: WorkFlowCompany = { name, description, is_visible }

    try {
      await CreateCompany(createData)
      setSuccess(true)
      setError("")
      setIsModalOpen(false)
    } catch (err: any) {
      setError("Failed to create company")
      setSuccess(false)
    }
  }

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Створити компанію</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Створити компанію</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Назва компанії"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Опис компанії"
        />
        <label>
          Видимість:
          <input
            type="checkbox"
            checked={is_visible}
            onChange={(e) => setIs_visible(e.target.checked)}
          />
        </label>
        <button onClick={handleCreateCompany}>Створити компанію</button>
        {error && <p>Error: {error}</p>}
        {success && <p>Компанія успішно створена!</p>}
      </Modal>
    </>
  )
}

export default СreateCompany
