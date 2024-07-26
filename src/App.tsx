import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import About from "./pages/About/About"
import UserRegistration from "./pages/UserRegistration"
import UserAuthorization from "./pages/UserAuthorization"
import ListOfUsers from "./pages/ListOfUsers"
import UserProfile from "./pages/UserProfile"
import ListOfCompanies from "./pages/ListOfCompanies"
import CompanyProfile from "./pages/CompanyProfile"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<UserRegistration />} />
        <Route path="/login" element={<UserAuthorization />} />
        <Route path="/users" element={<ListOfUsers />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/companies" element={<ListOfCompanies />} />
        <Route path="/company/:id" element={<CompanyProfile />} />
        <Route path="/" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
