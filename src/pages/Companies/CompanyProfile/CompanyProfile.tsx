// Companies/CompanyProfile/CompanyProfile.tsx
import { useState, useEffect } from "react"
import { GetCompany } from "../../../api/company/company"
import { useParams } from "react-router-dom"
import { Company } from "../../../interfaces"
import Modal from "../../Modal/Modal"
import UpdateCompany from "../UpdateCompany/UpdateCompany"
import DeleteCompany from "../DeleteCompany/DeleteCompany"

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>()
  const [company, setCompany] = useState<Company | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  useEffect(() => {
    const fetchCompany = async () => {
      if (!id) {
        setError("Company ID is missing")
        return
      }

      try {
        const company = await GetCompany(id)
        setCompany(company)
      } catch (err: any) {
        setError("Failed to fetch company")
      }
    }
    fetchCompany()
  }, [id])

  const handleOpenUpdateModal = () => setIsUpdateModalOpen(true)
  const handleCloseUpdateModal = () => setIsUpdateModalOpen(false)
  const handleOpenDeleteModal = () => setIsDeleteModalOpen(true)
  const handleCloseDeleteModal = () => setIsDeleteModalOpen(false)

  if (error) return <p>Error: {error}</p>
  if (!company) return <p>Loading...</p>

  return (
    <div>
      <h1>Company Profile</h1>
      <p>Name: {company.name}</p>
      <p>Description: {company.description}</p>
      <button onClick={handleOpenUpdateModal}>Update Company</button>
      <button onClick={handleOpenDeleteModal}>Delete Company</button>

      {id && (
        <Modal isOpen={isUpdateModalOpen} onClose={handleCloseUpdateModal}>
          <UpdateCompany companyId={id} onClose={handleCloseUpdateModal} />
        </Modal>
      )}

      {id && (
        <Modal isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
          <DeleteCompany companyId={id} onClose={handleCloseDeleteModal} />
        </Modal>
      )}
    </div>
  )
}

export default CompanyProfile
