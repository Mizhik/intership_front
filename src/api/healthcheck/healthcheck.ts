import instance from "../instance";

const HEALTH_API_URL = "/healthchecker/db"

export const getHealth = async () => {
  try {
    const response = await instance.get(HEALTH_API_URL)
    return response.data 
  } catch (error) {
    console.error(error)
    throw error
  }
}