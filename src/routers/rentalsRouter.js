import { Router } from "express";

import { deleteRental, getRentals, postRental, postRentalById } from "./../controllers/rentalsController.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals", postRental);
rentalsRouter.post("/rentals/:id/return", postRentalById);
rentalsRouter.delete("/rentals/:id", deleteRental);

export default rentalsRouter;