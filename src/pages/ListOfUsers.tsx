const ListOfUsers = () => {
  const users = ["User1", "User2", "User3"]

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default ListOfUsers
