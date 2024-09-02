import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetUserInfo } from "../../../api/users/users"
import {
  setUserInfo,
  setUserLoading,
  setUserError,
} from "../../../store/user/user.slice"
import { RootState } from "../../../store/store"

const InfoUser = () => {
  const dispatch = useDispatch()
  const [userId, setUserId] = useState("")
  const userInfo = useSelector((state: RootState) => state.users.userInfo)
  const userLoading = useSelector((state: RootState) => state.users.userLoading)
  const userError = useSelector((state: RootState) => state.users.userError)

  const handleFetchUserInfo = async () => {
    if (!userId) {
      dispatch(setUserError("Please enter a user ID"))
      return
    }

    dispatch(setUserLoading(true))
    dispatch(setUserError(null))

    try {
      const userData = await GetUserInfo(userId)
      dispatch(setUserInfo(userData))
    } catch (err: any) {
      dispatch(setUserError("Failed to fetch user info"))
    } finally {
      dispatch(setUserLoading(false))
    }
  }

  return (
    <>
      <h2>Get User Information</h2>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter user ID"
      />
      <button onClick={handleFetchUserInfo}>Get User Info</button>

      {userLoading && <p>Loading...</p>}
      {userError && <p>Error: {userError}</p>}
      {userInfo && (
        <div>
          <h3>User Details</h3>
          <p>Username: {userInfo.username}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
    </>
  )
}

export default InfoUser
