import { Router } from "express";

import { deleteRental, getRentals, postRental, postRentalById } from "./../controllers/rentalsController.js";
import { validateRentalPost, validateReturnDate } from "./../middlewares/rentalsMiddleware.js";

const rentalsRouter = Router();

rentalsRouter.get("/rentals", getRentals);
rentalsRouter.post("/rentals", validateRentalPost, postRental);
rentalsRouter.post("/rentals/:id/return", validateReturnDate, postRentalById);
rentalsRouter.delete("/rentals/:id", validateReturnDate, deleteRental);

export default rentalsRouter;