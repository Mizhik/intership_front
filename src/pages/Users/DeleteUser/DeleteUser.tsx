import { useState } from "react"
import { DeleteUser as DeleteUserApi } from "../../../api/users/users"

const DeleteUser = () => {
  const [userId, setUserId] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleDeleteUser = async () => {
    if (!userId) {
      setError("Please enter a user ID")
      return
    }

    try {
      await DeleteUserApi(userId)
      setSuccess(true)
      setError("")
      window.location.reload()
    } catch (err: any) {
      setError("Failed to delete user")
      setSuccess(false)
    }
  }

  return (
    <div>
      <h2>Delete User</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      <button onClick={handleDeleteUser}>Delete User</button>

      {error && <p>Error: {error}</p>}
      {success && <p>User deleted successfully!</p>}
    </div>
  )
}

export default DeleteUser
