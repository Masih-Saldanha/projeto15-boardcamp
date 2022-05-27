import connection from "./../database.js";

export async function getCustomers(req, res) {
    const cpf = req.query.cpf;
    let customers;
    try {
        if (!cpf) {
            customers = await connection.query(`
                SELECT * FROM customers
            `)
        } else {
            customers = await connection.query(`
                SELECT * FROM customers
                WHERE customers.cpf LIKE $1
            `, [(cpf + "%")])
        }
        res.send(customers.rows);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export async function getCustomersById(req, res) {
    try {

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