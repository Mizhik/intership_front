import { USER } from "../../requestsUrls"
import instance from "../instance"
import { IUpdateUser } from "../../interfaces"

export const GetUsers = async () => {
  const response = await instance.get(USER)
  return response.data
}

export const GetUserInfo = async (user_id: string) => {
  const response = await instance.get(`${USER}${user_id}`)
  return response.data
}

export const UpdateUser = async (user_id: string, body: IUpdateUser) => {
  const response = await instance.put(`${USER}${user_id}`, body)
  return response.data
}

export const DeleteUser = async (user_id: string) => {
  const response = await instance.delete(`${USER}${user_id}`)
  return response.data
}
