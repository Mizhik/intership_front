import axios from "axios";

const HEALTH_API_URL = "http://localhost:8000/healthchecker/db"

export const getPosts = async () => {
  try {
    const response = await axios.get(HEALTH_API_URL)
    return response.data 
  } catch (error) {
    console.error(error)
    throw error
  }
}