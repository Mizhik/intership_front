import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { getUserInfo } from "../../api/auth/auth"
import { setUser } from "../../store/user/info.slice"

const UserProfile = () => {
  const dispatch = useDispatch()
  const token = useSelector((state: RootState) => state.auth.token)
  const userName = useSelector((state: RootState) => state.info.username)
  const userEmail = useSelector((state: RootState) => state.info.email)

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        try {
          const userData = await getUserInfo()
          dispatch(
            setUser({ username: userData.username, email: userData.email })
          )
        } catch (error) {
          console.error("Error fetching user data:", error)
        }
      }
    }

    fetchUserData()
  }, [dispatch, token])

  return (
    <div>
      {userName && userEmail ? (
        <h1>
          Welcome, {userName}! Your email: {userEmail}
        </h1>
      ) : (
        <h1>Welcome!</h1>
      )}
    </div>
  )
}

export default UserProfile
