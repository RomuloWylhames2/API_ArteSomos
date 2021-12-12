import { Router } from "express";
import CategoriasController from "./controllers/CategoriasController";
import ProdutosController from "./controllers/ProdutosController";

const routes = Router();

//Routes produtos
routes.post("/produtos", ProdutosController.create);
routes.get("/produtos", ProdutosController.all);
routes.get("/produtos/:id", ProdutosController.one);
routes.get("/produtos/categoria/:id", ProdutosController.oneCategory);
routes.put("/produtos/:id", ProdutosController.update);
routes.delete("/produtos/:id", ProdutosController.delete);

//Routes categorias
routes.post("/categorias", CategoriasController.create);
routes.get("/categorias", CategoriasController.all);
routes.get("/categorias/:id", CategoriasController.one);
routes.put("/categorias/:id", CategoriasController.update);
routes.delete("/categorias/:id", CategoriasController.delete);

export default routes;
