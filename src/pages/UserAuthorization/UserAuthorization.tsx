import React, { useState } from "react"
import { userLogin } from "../../api/auth/auth"
import { useAuth0 } from "@auth0/auth0-react"

const UserAuthorization: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const { loginWithPopup, getAccessTokenSilently } = useAuth0()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage(null)

    try {
      const response = await userLogin({ email, password })
      localStorage.setItem("token", response.access_token)
      window.location.reload()
    } catch (error) {
      setErrorMessage(
        "Неправильний email або пароль. Будь ласка, спробуйте ще раз."
      )
    }
  }

  const handleLoginWithAuth0 = async () => {
    setErrorMessage(null)
    await loginWithPopup()
    const token = await getAccessTokenSilently()
    localStorage.setItem("token", token)
    window.location.reload()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
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
        <button type="submit">Увійти</button>
      </form>
      <hr />
      <button type="button" onClick={handleLoginWithAuth0}>
        Зайти за допомогою Auth0
      </button>
    </>
  )
}

export default UserAuthorization
