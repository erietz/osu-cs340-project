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
            });
        }
});

export default restaurantcustomers;
