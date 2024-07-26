
const UserProfile = () => {
  const user = { name: "John Doe", email: "john.doe@example.com" }

  return (
    <div>
      <h1>Профіль користувача</h1>
      <p>Ім'я: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default UserProfile
