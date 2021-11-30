import express from "express";
import pool from "../dbConnector.mjs";

const restaurantcustomers = express.Router();

//------------------------------------------------------------------------------
// RestaurantCustomers
//------------------------------------------------------------------------------
restaurantcustomers.get("/", (_, res) => {
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
        });
});

export default restaurantcustomers;
