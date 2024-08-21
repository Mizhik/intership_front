import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
import { setAuthenticated, logout } from "../../store/user/auth.slice"
import { getUserInfo } from "../../api/auth/auth"

const AuthVerifier: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem("token")
        if (token) {
          const userData = await getUserInfo()
          dispatch(setAuthenticated({ token, user: userData }))
        } else if (isAuthenticated) {
          const accessToken = await getAccessTokenSilently()
          const userData = await getUserInfo()
          dispatch(setAuthenticated({ token: accessToken, user: userData }))
        } else {
          dispatch(logout())
        }
      } catch (error) {
        console.error("Error verifying token:", error)
        dispatch(logout())
      } finally {
        setLoading(false)
      }
    }

    verifyToken()
  }, [isAuthenticated, getAccessTokenSilently, dispatch])

  if (isLoading || loading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default AuthVerifier
