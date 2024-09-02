import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store/store"
import { GetUsers } from "../../../api/users/users"
import { setUsers, setLoading, setError } from "../../../store/user/user.slice"

const ListUser = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const loading = useSelector((state: RootState) => state.users.loading)
  const error = useSelector((state: RootState) => state.users.error)

  const [showUsers, setShowUsers] = useState(false)

  const handleToggleUsers = async () => {
    if (!showUsers) {
      dispatch(setLoading(true))
      dispatch(setError(null))

      try {
        const userData = await GetUsers()
        dispatch(setUsers(userData))
      } catch (err: any) {
        dispatch(setError("Failed to fetch users"))
      } finally {
        dispatch(setLoading(false))
      }
    }
    setShowUsers(!showUsers)
  }

  return (
    <>
      <h1>Список користувачів</h1>
      <button onClick={handleToggleUsers}>
        {showUsers ? "Сховати користувачів" : "Показати користувачів"}
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {showUsers && (
        <ul>
          {users?.length !== 0 &&
            users.map((u) => (
              <li key={u.email}>
                Username: {u.username}, Email: {u.email}
              </li>
            ))}
        </ul>
      )}
    </>
  )
}

export default ListUser
