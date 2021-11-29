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

restaurants.post("/", (req, res) => {
    const {
        restaurantName,
        streetAddress1,
        streetAddress2,
        city,
        state,
        zip
    } = req.body;

    pool.query(
        "INSERT INTO Restaurants\
        (restaurantName, streetAddress1, streetAddress2, city, state, zip)\
        VALUES (?, ?, ?, ?, ?, ?)"
        ,
        [
            restaurantName,
            streetAddress1,
            streetAddress2,
            city,
            state,
            zip
        ],
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(201).json({ status: "Restaurant Created" })
            }
    });
});

export default restaurants;
