import express from "express";
import pool from "../dbConnector.mjs";

const restaurants = express.Router();

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

restaurants.delete("/", (req, res) => {
    const body = req.body;
    pool.query(
        `DELETE FROM Restaurants WHERE restaurantID = "${body.restaurantID}"`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json({ status: "Restaurant Deleted" })
            }
        });
});


export default restaurants;
