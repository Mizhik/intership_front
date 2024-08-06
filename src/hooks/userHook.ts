import { useCallback, useMemo } from "react"
import { useSelectorAll } from "./useSelectorAll"
import { useAppDispatch } from "../store/store"
import * as User from "../store/user/user.slice"

export const useDispatchAddUser = () => {
  const dispatch = useAppDispatch()
  return useCallback(
    (action: User.User) => {
      dispatch(User.actions.addUser(action))
    },
    [dispatch]
  )
}

export const useSelectorUser = (): User.UserInitialState => {
  const { users } = useSelectorAll()
  return useMemo(() => users, [users])
}
