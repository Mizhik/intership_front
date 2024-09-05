// Companies/DeleteCompany/DeleteCompany.tsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DeleteCompany as DeleteCompanyApi } from "../../../api/company/company"

interface DeleteCompanyProps {
  companyId: string
  onClose: () => void
}

const DeleteCompany = ({ companyId, onClose }: DeleteCompanyProps) => {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDeleteCompany = async () => {
    if (!companyId) {
      setError("Company ID is missing")
      return
    }

    if (window.confirm("Are you sure you want to delete this company?")) {
      setIsDeleting(true)
      navigate("/companies")
      try {
        await DeleteCompanyApi(companyId)
        setSuccess(true)
        setError(null)
      } catch (err: any) {
        console.error("Error deleting company:", err) // Log error to console for debugging
        setError("Failed to delete company")
        setSuccess(false)
      } finally {
        setIsDeleting(false)
        onClose()
      }
    }
  }

  return (
    <div>
      <h2>Delete Company</h2>
      <p>Are you sure you want to delete this company?</p>
      <button onClick={handleDeleteCompany} disabled={isDeleting}>
        {isDeleting ? "Deleting..." : "Delete Company"}
      </button>
      <button onClick={onClose}>Cancel</button>

      {error && <p>Error: {error}</p>}
      {success && <p>Company deleted successfully!</p>}
    </div>
  )
}

export default DeleteCompany
