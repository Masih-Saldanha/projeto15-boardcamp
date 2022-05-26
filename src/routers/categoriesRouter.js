import { Router } from "express";

import { validateCategorie } from "./../middlewares/categoriesMiddleware.js";
import { getCategories, postCategories } from "./../controllers/categoriesController.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", getCategories);
categoriesRouter.post("/categories",validateCategorie, postCategories);

export default categoriesRouter;