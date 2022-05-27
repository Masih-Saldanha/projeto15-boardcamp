import { Router } from "express";

import { getCustomers, getCustomersById, postCustomer, updateCustomer } from "./../controllers/customersController.js";

const customersRouter = Router();

customersRouter.get("/customers", getCustomers);
customersRouter.get("/customers/:id", getCustomersById);
customersRouter.post("/customers", postCustomer);
customersRouter.put("/customers/:id", updateCustomer);

export default customersRouter;