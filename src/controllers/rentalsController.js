import connection from "./../database.js";

export async function getRentals(req, res) {
    const rentalsList = await connection.query(`
        SELECT rentals.*, customers.name AS "customerName", games.name AS "gameName", categories.id AS "categoryId", categories.name AS "categoryName" 
        FROM rentals
        JOIN customers ON customers.id = rentals."customerId"
        JOIN games ON games.id = rentals."gameId"
        JOIN categories ON games."categoryId" = categories.id;
    `)
    let rentals = rentalsList.rows;

    const sendRentals = [];
    for (let rental of rentals) {
        rental = {
            ...rental,
            customer: {
                id: rental.customerId,
                name: rental.customerName
            },
            game: {
                id: rental.gameId,
                name: rental.gameName,
                categoryId: rental.categoryId,
                categoryName: rental.categoryName
            }
        }
        delete rental.customerName;
        delete rental.gameName;
        delete rental.categoryId;
        delete rental.categoryName;
        sendRentals.push(rental);
    }

    res.send(sendRentals);

    // const rentalsList = await connection.query(`SELECT * FROM rentals;`);
    // const customersList = await connection.query(`SELECT * FROM customers;`);
    // const gamesList = await connection.query(`SELECT games.*, categories.name AS "categoryName" FROM games JOIN categories ON games."categoryId" = categories.id;`);

    // const rentals = rentalsList.rows.map(rental => {
    //     return {
    //         ...rental,
    //         customer: {
    //             id: customersList.rows.find(customer => customer.id === rental.customerId).id,
    //             name: customersList.rows.find(customer => customer.id === rental.customerId).name
    //         },
    //         game: {
    //             id: gamesList.rows.find(game => game.id === rental.gameId).id,
    //             name: gamesList.rows.find(game => game.id === rental.gameId).name,
    //             categoryId: gamesList.rows.find(game => game.id === rental.gameId).categoryId,
    //             categoryName: gamesList.rows.find(game => game.id === rental.gameId).categoryName
    //         }
    //     }
    // })

    // res.send(rentals);
}

export async function postRental(req, res) {

}

export async function postRentalById(req, res) {

}

export async function deleteRental(req, res) {

}