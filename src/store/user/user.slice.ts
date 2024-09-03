import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../../interfaces"

export interface UserInitialState {
  users: User[]
  userInfo: User | null
  loading: boolean
  userLoading: boolean
  error: string | null
  userError: string | null
}

const userInitialState: UserInitialState = {
  users: [],
  userInfo: null,
  loading: false,
  userLoading: false,
  error: null,
  userError: null,
}

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
      state.loading = false
      state.error = null
    },
    setUserInfo: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload
      state.userLoading = false
      state.userError = null
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
    setUserError: (state, action: PayloadAction<string | null>) => {
      state.userError = action.payload
      state.userLoading = false
    },
  },
})

export const {
  setUsers,
  setUserInfo,
  setLoading,
  setUserLoading,
  setError,
  setUserError,
} = userSlice.actions
export default userSlice.reducer
