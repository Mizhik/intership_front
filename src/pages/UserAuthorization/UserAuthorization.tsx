import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { loginSuccess } from "../../store/user/auth.slice"
import { userLogin } from "../../api/auth/auth"
import { useAuth0 } from "@auth0/auth0-react"

const UserAuthorization: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loginWithPopup, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await userLogin({ email, password })
      const token = response.access_token

      dispatch(loginSuccess(token))
    } catch (error) {
      console.error("Error during login:", error)
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
    <>
      <form onSubmit={handleSubmit}>
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
