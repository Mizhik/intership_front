import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  username: "",
  email: "",
}

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username
      state.email = action.payload.email
    },
    clearUser: (state) => {
      state.username = ""
      state.email = ""
    },
  },
})

export const { setUser, clearUser } = userInfoSlice.actions
export default userInfoSlice.reducer
