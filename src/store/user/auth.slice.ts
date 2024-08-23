import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../interfaces"

export interface AuthState {
  token: string | null
  isAuthenticated: boolean
  user: User | null
}

const initialState: AuthState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.isAuthenticated = true
      localStorage.setItem("token", action.payload)
    },
    setAuthenticated: (
      state,
      action: PayloadAction<{ token: string; user: any }>
    ) => {
      state.token = action.payload.token
      state.isAuthenticated = true
      state.user = action.payload.user
      localStorage.setItem("token", action.payload.token)
    },
    logout: (state) => {
      state.token = null
      state.isAuthenticated = false
      state.user = null
      localStorage.removeItem("token")
    },
  },
})

export const { loginSuccess, setAuthenticated, logout } = authSlice.actions
export default authSlice.reducer
