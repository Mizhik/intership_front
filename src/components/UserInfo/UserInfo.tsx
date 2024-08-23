import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

const UserProfile = () => {
  const userData = useSelector((state: RootState) => state.auth.user)

  return (
    <div>
      {userData ? (
        <h1>
          Welcome, {userData.username}! Your email: {userData.email}
        </h1>
      ) : (
        <h1>Welcome!</h1>
      )}
    </div>
  )
}

export default UserProfile
