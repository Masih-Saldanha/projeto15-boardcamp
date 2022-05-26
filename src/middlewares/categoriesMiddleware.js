import connection from "./../database.js";

export async function validateCategorie(req, res, next) {
    try {
        if (!req.body.name) return res.sendStatus(400);
        const categorie = await connection.query("SELECT * FROM categories WHERE name=$1;", [req.body.name]);
        if (categorie.rows.length > 0) return res.sendStatus(409);

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}