import React, { useState } from "react"
import { userSignup } from "../../api/auth/auth"
import { useAuth0 } from "@auth0/auth0-react"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const UserRegistration: React.FC = () => {
  const [username, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const { loginWithPopup, getAccessTokenSilently } = useAuth0()

  const validateForm = () => {
    if (!emailRegex.test(email)) {
      setError("Неправильний формат електронної пошти")
      return false
    }
    if (password !== confirmPassword) {
      setError("Паролі не співпадають")
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    try {
      await userSignup({ username, email, password })
      setMessage("Реєстрація успішна!")
      setError(null)
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
    } catch (err) {
      setError("Сталася помилка під час реєстрації")
      setMessage(null)
    }
  }

  const handleLoginWithAuth0 = async () => {
    try {
      await loginWithPopup()
      const token = await getAccessTokenSilently()
      localStorage.setItem("token", token)
      window.location.reload()
    } catch (error) {
      console.log("Authentication failed:", error)
    }
  }

  return (
    <div>
      <h1>Реєстрація користувача</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ім'я:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Підтвердження пароля:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Реєстрація</button>
      </form>
      <hr />
      <button type="button" onClick={handleLoginWithAuth0}>
        Зареєструватися за допомогою Auth0
      </button>
    </div>
  )
}

export default UserRegistration
