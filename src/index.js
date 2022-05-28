import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import categoriesRouter from "./../src/routers/categoriesRouter.js";
import gamesRouter from "./../src/routers/gamesRouter.js";
import customersRouter from "./../src/routers/customersRouter.js";
import rentalsRouter from "./../src/routers/rentalsRouter.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.use(categoriesRouter);
app.use(gamesRouter);
app.use(customersRouter);
app.use(rentalsRouter);

app.listen(process.env.PORT || 4000, () => console.log("Connected and listening on port:", process.env.PORT || 4000));