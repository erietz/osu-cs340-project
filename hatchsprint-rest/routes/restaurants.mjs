import express from "express";
import pool from "../dbConnector.mjs";

const restaurants = express.Router();

//------------------------------------------------------------------------------
// Restaurants
//------------------------------------------------------------------------------
restaurants.get("/", (_, res) => {
    pool.query("SELECT * FROM Restaurants;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

export default restaurants;
