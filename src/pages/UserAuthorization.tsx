
const UserAuthorization = () => {
  return (
    <div>
      <h1>Авторизація користувача</h1>
      <form>
        {/* Макетні поля форми */}
        <input type="text" placeholder="Ім'я користувача" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Увійти</button>
      </form>
    </div>
  )
}

export default UserAuthorization
