// Users/ListUsers/ListUsers.tsx
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../store/store"
import { GetUsers } from "../../../api/users/users"
import { setUsers, setLoading, setError } from "../../../store/user/user.slice"
import Pagination from "../../../components/Pagination/Pagination"

const ListUser = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const loading = useSelector((state: RootState) => state.users.loading)
  const error = useSelector((state: RootState) => state.users.error)

  const [showUsers, setShowUsers] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const handleToggleUsers = async () => {
    if (!showUsers) {
      dispatch(setLoading(true))
      dispatch(setError(null))

      try {
        const userData = await GetUsers()
        dispatch(setUsers(userData))
        setTotalPages(Math.ceil(userData.length / 10))
      } catch (err: any) {
        dispatch(setError("Failed to fetch users"))
      } finally {
        dispatch(setLoading(false))
      }
    }
    setShowUsers(!showUsers)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
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
        <>
          <ul>
            {users?.length !== 0 &&
              users.slice((currentPage - 1) * 10, currentPage * 10).map((u) => (
                <li key={u.email}>
                  Username: {u.username}, Email: {u.email}
                </li>
              ))}
          </ul>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}

export default ListUser