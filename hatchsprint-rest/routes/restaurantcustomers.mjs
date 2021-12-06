import express from "express";
import pool from "../dbConnector.mjs";

const restaurantcustomers = express.Router();

restaurantcustomers.get("/", (req, res) => {
    const restaurantID = req.query.restaurantID;
    if (restaurantID === undefined || restaurantID === null) {
        pool.query(
            `SELECT rc.restaurantID, rc.customerID, r.restaurantName, c.firstName, c.lastName
            FROM RestaurantCustomers rc INNER JOIN
            Restaurants r on r.restaurantID = rc.restaurantID INNER JOIN
            Customers c on c.customerID = rc.customerID
            ;`,
            (error, results, _) => {
                if (error) {
                    console.error(error);
                    res.status(400).json(error);
                } else {
                    res.status(200).json(results);
                }
            }
        );
    } else {
        pool.query(
            `SELECT rc.restaurantID, rc.customerID, r.restaurantName, c.firstName, c.lastName
            FROM RestaurantCustomers rc INNER JOIN
            Restaurants r on r.restaurantID = rc.restaurantID INNER JOIN
            Customers c on c.customerID = rc.customerID
            WHERE r.restaurantID = ?
            ;`,
            [
                restaurantID
            ],
            (error, results, _) => {
                if (error) {
                    console.error(error);
                    res.status(400).json(error);
                } else {
                    res.status(200).json(results);
                }
            }
        );
    }
});

restaurantcustomers.get("/availablecustomers", (_, res) => {
    const restaurantID = _.query.restaurantID
    if (restaurantID === undefined || restaurantID === null){
    pool.query("SELECT * FROM Customers;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
}
    else{
        pool.query(
            "SELECT c.* FROM Customers c WHERE c.customerID NOT IN (SELECT customerID FROM RestaurantCustomers WHERE restaurantID = ?)",
            [restaurantID],
            (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    }
});


restaurantcustomers.post("/", (req, res) => {

    const customerID = parseInt(req.body.customerID);
    const restaurantID = parseInt(req.body.restaurantID);

    const query = `INSERT INTO RestaurantCustomers (customerID, restaurantID) VALUES (${customerID}, ${restaurantID})`;

    pool.query(query, (error, results, fields) => {
        let restaurantId;
        if (error) {
            console.error(error);
        } else {
            res.status(201).json(results);
        }

    })
});

restaurantcustomers.delete("/", (req, res) => {
    const restaurantID = req.body.restaurantID;
    const customerID = req.body.customerID;
    pool.query(
        `DELETE FROM RestaurantCustomers
        WHERE restaurantID = ? and customerID = ?
        `,
        [
            restaurantID,
            customerID
        ],
        (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        }
    )
});

export default restaurantcustomers;
