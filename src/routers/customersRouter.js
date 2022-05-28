import { Router } from "express";

import { getCustomers, getCustomersById, postCustomer, updateCustomer } from "./../controllers/customersController.js";
import { validateCustomer } from "./../middlewares/customersMiddleware.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomersById);
customersRouter.post("/customers", validateCustomer, postCustomer);
customersRouter.put("/customers/:id", validateCustomer, updateCustomer);

export default customersRouter;