import React from "react"
import UserProfile from "./UserInfo"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <UserProfile />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
