import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";


const routes = Router();

/*
    Tipos de parâmetros
    Routes Params => Parametroos de rotas
    Query Params => Filtros e buscas
    Body params =>
*/

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)

export { routes };