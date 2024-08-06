import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../../store/user/user.slice"
import { RootState } from "../../store/store"

const ListOfUsers = () => {
  const users = useSelector((state: RootState) => state.users.users)
  const dispatch = useDispatch()

  const handleAddUser = () => {
    dispatch(
      addUser({
        id: users.length + 1,
        email: "new_user@gmail.com",
        firstName: "1",
        lastName: "1",
      })
    )
  }

  return (
    <div>
      <h1>Список користувачів</h1>
      <button onClick={handleAddUser}>Показать користувача</button>
      <ul>
        {users?.length !== 0 &&
          users.map((u) => (
            <span key={u.id}>
              {u.id}. {u.email}
            </span>
          ))}
      </ul>
    </div>
  )
}

export default ListOfUsers
