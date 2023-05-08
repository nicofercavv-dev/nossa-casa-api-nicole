// import { Axios } from "axios"

import axios from "axios"

export const clientCms = axios.create({
  baseURL: "http://localhost:1337",
})
