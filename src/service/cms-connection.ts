import axios from "axios"

export const clientCms = axios.create({
  baseURL: process.env.CMS_URL || "http://localhost:1337",
})
