import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"
import { setAuthenticated, logout } from "../../store/user/auth.slice"
import { getUserInfo } from "../../api/auth/auth"

const AuthVerifier: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, isLoading } = useAuth0()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem("token")
      if (token) {
        try {
          const userData = await getUserInfo()
          dispatch(setAuthenticated({ token, user: userData }))
        } catch (error) {
          dispatch(logout())
        }
      } else {
        dispatch(logout())
      }
      setLoading(false)
    }

    verifyToken()
  }, [isAuthenticated, dispatch])

  if (isLoading || loading) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default AuthVerifier
