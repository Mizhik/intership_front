export interface SignupData {
  username: string
  email: string
  password: string
}

export interface LoginData {
  email: string
  password: string
}

export interface User {
  username: string
  email: string
}

export interface IUpdateUser {
  username: string
  password: string
}
