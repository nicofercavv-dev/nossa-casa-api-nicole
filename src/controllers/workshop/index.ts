import { clientCms } from "@service/cms-connection"

export const getWorkshops = async (req, res) => {
  try {
    const response = await clientCms.get("/api/workshops")
    const workshops = response.data
    return res.json(workshops)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: "internal server error" })
  }
}
