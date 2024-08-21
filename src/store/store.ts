import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user/user.slice"
import authReducer from "./user/auth.slice"
import userInfoReducer from "./user/info.slice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

export const store = configureStore({
  reducer: {
    users: userReducer,
    auth: authReducer,
    info: userInfoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
