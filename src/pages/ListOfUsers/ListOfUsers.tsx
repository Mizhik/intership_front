import { useDispatchAddUser, useSelectorUser } from "../../hooks/userHook"

const ListOfUsers = () => {
  const { users } = useSelectorUser()
  const dispatchAddUser = useDispatchAddUser()
  const addUser = () => {
    dispatchAddUser({
      id: users.length + 1,
      email: "new_user@gmail.com",
      firstName: "1",
      lastName: "1",
    })
  }
  return (
    <div>
      <h1>Список користувачів</h1>
      <button onClick={addUser}>
        Показать користувача
      </button>
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
