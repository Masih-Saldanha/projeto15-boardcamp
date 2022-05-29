import { Router } from "express";

import { deleteRental, getRentals, postRental, postRentalById } from "./../controllers/rentalsController.js";
import { validateRental } from "./../middlewares/rentalsMiddleware.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals", validateRental, postRental);
rentalsRouter.post("/rentals/:id/return", postRentalById);
rentalsRouter.delete("/rentals/:id", deleteRental);

export default rentalsRouter;