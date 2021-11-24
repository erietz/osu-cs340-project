import express from "express";
import pool from "../dbConnector.mjs";

const restaurantcustomers = express.Router();

//------------------------------------------------------------------------------
// RestaurantCustomers
//------------------------------------------------------------------------------
restaurantcustomers.get("/", (_, res) => {
    pool.query("SELECT * FROM RestaurantCustomers;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

export default restaurantcustomers;
