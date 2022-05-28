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
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function updateCustomer(req, res) {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}