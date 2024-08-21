import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import About from "./pages/About/About"
import UserRegistration from "./pages/UserRegistration/UserRegistration"
import UserAuthorization from "./pages/UserAuthorization/UserAuthorization"
import ListOfUsers from "./pages/ListOfUsers/ListOfUsers"
import UserProfile from "./pages/UserProfile/UserProfile"
import ListOfCompanies from "./pages/ListOfCompanies/ListOfCompanies"
import CompanyProfile from "./pages/CompanyProfile/CompanyProfile"
import PublicRoute from "./components/Routes/PublicRouter"
import PrivateRoute from "./components/Routes/PrivateRouter"
import Layout from "./components/UserInfo/UserLayout"

import { Provider } from "react-redux"
import { store } from "./store/store.ts"
import { Auth0Provider } from "@auth0/auth0-react"
import AuthVerifier from "./components/AuthVerify/AuthVerify.tsx"

const domain = import.meta.env.VITE_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID

const App = () => {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          audience: "https://backend-auth0",
          redirect_uri: window.location.origin,
        }}
      >
        <AuthVerifier>
          <Router>
            <Navbar />
            <Layout>
              <Routes>
                <Route element={<PublicRoute />}>
                  <Route path="/register" element={<UserRegistration />} />
                  <Route path="/login" element={<UserAuthorization />} />
                </Route>

                <Route path="/about" element={<About />} />

                <Route element={<PrivateRoute />}>
                  <Route path="/users" element={<ListOfUsers />} />
                  <Route path="/user/:id" element={<UserProfile />} />
                  <Route path="/companies" element={<ListOfCompanies />} />
                  <Route path="/company/:id" element={<CompanyProfile />} />
                </Route>

                <Route path="/" element={<About />} />
              </Routes>
            </Layout>
          </Router>
        </AuthVerifier>
      </Auth0Provider>
    </Provider>
  )
}

export default App
