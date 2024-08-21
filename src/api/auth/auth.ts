import instance from "../instance"

const URL_SIGNUP = "/auth/signup"
const URL_LOGIN = "/auth/login"
const URL_ME = "/auth/me"

interface SignupData {
  username: string
  email: string
  password: string
}

interface LoginData {
  email: string
  password: string
}

export const userSignup = async (data: SignupData) => {
  try {
    const response = await instance.post(URL_SIGNUP, data)
    return response.data
  } catch (error: any) {
    if (error.response) {
      console.error("Server error:", error.response.data)
    } else if (error.request) {
      console.error("No response received:", error.request)
    } else {
      console.error("Error setting up request:", error.message)
    }
    throw error
  }
}

export const userLogin = async (data: LoginData) => {
  try {
    const response = await instance.post(URL_LOGIN, data)
    return response.data
  } catch (error: any) {
    if (error.response) {
      console.error("Server error:", error.response.data)
    } else if (error.request) {
      console.error("No response received:", error.request)
    } else {
      console.error("Error setting up request:", error.message)
    }
    throw error
  }
}

export const getUserInfo = async () => {
  try {
    const token = localStorage.getItem("token")
    if (!token) throw new Error("No token found")

    const response = await instance.get(URL_ME, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data 
  } catch (error: any) {
    if (error.response) {
      console.error("Server error:", error.response.data)
    } else if (error.request) {
      console.error("No response received:", error.request)
    } else {
      console.error("Error setting up request:", error.message)
    }
    throw error
  }
}
