import { useMemo } from "react"
import { RootState, useAppSelector } from "../store/store"

const selectorAll = (state: RootState) => state

export const useSelectorAll = () => {
  const { users } = useAppSelector(selectorAll)
  return useMemo(() => ({ users }), [users])
}
