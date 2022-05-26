import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";

import connection from "./../src/database.js"

// console.log(connection);

dotenv.config();

const app = express();

app.use(cors());
app.use(json());

app.get("/categories", async (req, res) => {
    try {
        const categories = await connection.query("SELECT * FROM categories;");
        res.send(categories.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

app.post("/categories", async (req, res) => {
    const { name } = req.body;
    try {
        const addCategorie = await connection.query("INSERT INTO categories (name) VALUES ($1);", [name]);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
})

app.listen(process.env.PORT || 4000, () => console.log("Connected and listening on port:", process.env.PORT || 4000));