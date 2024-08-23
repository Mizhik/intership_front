import { LoginData, SignupData } from "../../interfaces"
import { URL_LOGIN, URL_ME, URL_SIGNUP } from "../../requestsUrls"
import instance from "../instance"


export const userSignup = async (data: SignupData) => {
  const response = await instance.post(URL_SIGNUP, data)
  return response.data
}

export const userLogin = async (data: LoginData) => {
  const response = await instance.post(URL_LOGIN, data)
  return response.data
}

export const getUserInfo = async () => {
  const token = localStorage.getItem("token")
  if (!token) throw new Error("No token found")

  const response = await instance.get(URL_ME, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}
