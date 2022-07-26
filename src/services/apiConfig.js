import axios from "axios"

const apiConfig = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Basic ${btoa("test@liferay.com:1")}`,
  },
})

export default apiConfig
