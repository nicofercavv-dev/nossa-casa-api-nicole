import { getTODO, itsWorks } from "@controllers/todo"
import { getWorkshops } from "./controllers/workshop"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/workshops", getWorkshops)
}
