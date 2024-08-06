import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">Про нас</Link>
        </li>
        <li>
          <Link to="/register">Реєстрація</Link>
        </li>
        <li>
          <Link to="/login">Авторизація</Link>
        </li>
        <li>
          <Link to="/users">Список користувачів</Link>
        </li>
        <li>
          <Link to="/companies">Список компаній</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
