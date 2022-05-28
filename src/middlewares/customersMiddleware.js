import connection from "./../database.js";
import customerSchema from "./../schemas/customerSchema.js";

export async function validatePostCustomer(req, res, next) {
    const { cpf } = req.body;
    const validation = customerSchema.validate(req.body, { abortEarly: false });
    try {
        if (validation.error) return res.sendStatus(400);

        const isCpfRegistered = await connection.query(`
            SELECT * FROM customers
            WHERE customers.cpf = $1;
        `, [cpf]);
        if (isCpfRegistered.rows.length > 0) return res.sendStatus(409);

        next();
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}