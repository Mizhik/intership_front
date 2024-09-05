import { useState, useEffect } from "react"
import {
  UpdateCompany as UpdateCompanyApi,
  GetCompany,
} from "../../../api/company/company"
import { WorkFlowCompany } from "../../../interfaces"

interface UpdateCompanyProps {
  companyId: string
  onClose: () => void
}

const UpdateCompany = ({ companyId, onClose }: UpdateCompanyProps) => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const fetchCompany = async () => {
      if (!companyId) {
        setError("Company ID is missing")
        return
      }

      try {
        const data = await GetCompany(companyId)
        setName(data.name)
        setDescription(data.description)
        setIsVisible(data.is_visible)
      } catch (err: any) {
        setError("Failed to fetch company details")
      }
    }
    fetchCompany()
  }, [companyId])

  const handleUpdateCompany = async () => {
    if (!name || !description) {
      setError("All fields are required")
      return
    }

    const updateData: WorkFlowCompany = {
      name,
      description,
      is_visible: isVisible,
    }

    try {
      if (!companyId) {
        setError("Company ID is missing")
        return
      }
      await UpdateCompanyApi(companyId, updateData)
      setSuccess(true)
      setError("")
      onClose()
      window.location.reload()
    } catch (err: any) {
      setError("Failed to update company")
      setSuccess(false)
    }
  }

  return (
    <div>
      <h2>Update Company</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Company Name"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Company Description"
      />
      <label>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
        />
        Visible
      </label>
      <button onClick={handleUpdateCompany}>Update Company</button>

      {error && <p>Error: {error}</p>}
      {success && <p>Company updated successfully!</p>}
    </div>
  )
}

export default UpdateCompany
