import connection from "./../database.js";

export async function getCategories(req, res) {
    try {
        const categories = await connection.query("SELECT * FROM categories;");
        res.send(categories.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function postCategories(req, res) {
    const { name } = req.body;
    try {
        const addCategorie = await connection.query("INSERT INTO categories (name) VALUES ($1);", [name]);
        res.sendStatus(201);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}