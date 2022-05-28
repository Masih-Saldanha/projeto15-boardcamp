import connection from "./../database.js";

export async function getCustomers(req, res) {
    const cpf = req.query.cpf;
    let customers;
    try {
        if (!cpf) {
            customers = await connection.query(`
                SELECT * FROM customers;
            `);
        } else {
            customers = await connection.query(`
                SELECT * FROM customers
                WHERE customers.cpf LIKE $1;
            `, [(cpf + "%")]);
        }
        res.send(customers.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function getCustomersById(req, res) {
    const id = req.params.id;
    try {
        const customer = await connection.query(`
            SELECT * FROM customers
            WHERE cpf = $1;
        `, [id]);
        if (customer.rows.length === 0) return res.sendStatus(404)
        res.send(customer.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function postCustomer(req, res) {
    const { name, phone, cpf, birthday } = req.body;
    try {
        await connection.query(`
            INSERT INTO customers (name, phone, cpf, birthday)
            VALUES ($1, $2, $3, $4);
        `, [name, phone, cpf, birthday]);

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function updateCustomer(req, res) {
    const { name, phone, cpf, birthday } = req.body;
    const id = req.params.id;
    try {
        await connection.query(`
            UPDATE customers SET name=$2, phone=$3, cpf=$4, birthday=$5
            WHERE id = $1;
        `, [id, name, phone, cpf, birthday]);

        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}