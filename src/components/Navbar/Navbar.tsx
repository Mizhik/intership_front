import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./Navbar.css"
import { logout } from "../../store/user/auth.slice"
import { useAuth0 } from "@auth0/auth0-react"

const Navbar: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isAuthenticated = useSelector(
    (state: any) => state.auth.isAuthenticated
  )
  const { logout: auth0Logout } = useAuth0()

  const handleLogout = () => {
    dispatch(logout())
    auth0Logout({ logoutParams: { returnTo: window.location.origin } })
    window.location.href = "/login"
  }

  const handleNavigation = async (path: string) => {
    navigate(path)
  }


  return (
    <nav>
      <ul>
        <li>
          <span onClick={() => handleNavigation("/about")}>Про нас</span>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <span onClick={() => handleNavigation("/users")}>
                Список користувачів
              </span>
            </li>
            <li>
              <span onClick={() => handleNavigation("/companies")}>
                Список компаній
              </span>
            </li>
            <li>
              <button onClick={handleLogout}>Вихід</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Авторизація</Link>
            </li>
            <li>
              <Link to="/register">Реєстрація</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
