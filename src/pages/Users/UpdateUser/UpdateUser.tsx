import { useState } from "react"
import { UpdateUser as UpdateUserApi } from "../../../api/users/users"
import { IUpdateUser } from "../../../interfaces"

const UpdateUser = () => {
  const [userId, setUserId] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleUpdateUser = async () => {
    if (!userId || !username || !password || !confirmPassword) {
      setError("All fields are required")
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    const updateData: IUpdateUser = { username, password }

    try {
      await UpdateUserApi(userId, updateData)
      setSuccess(true)
      setError("")
    } catch (err: any) {
      setError("Failed to update user")
      setSuccess(false)
    }
  }

  return (
    <div>
      <h2>Update User</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="New Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="New Password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm New Password"
      />
      <button onClick={handleUpdateUser}>Update User</button>

      {error && <p>Error: {error}</p>}
      {success && <p>User updated successfully!</p>}
    </div>
  )
}

export default UpdateUser
