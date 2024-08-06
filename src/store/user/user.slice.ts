import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
}

export interface UserInitialState {
  users: User[]
}

const userInitialState: UserInitialState = {
  users: [
    { id: 1, email: "user1@gmail.com", firstName: "user", lastName: "1" },
    { id: 2, email: "user2@gmail.com", firstName: "user", lastName: "2" },
    { id: 3, email: "user3@gmail.com", firstName: "user", lastName: "3" },
  ],
}

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const user = state.users.find((u) => u.id === action.payload.id)
      if (!user) {
        state.users.push(action.payload)
      } else {
        alert("User with this ID already exists")
      }
    },
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
