import express from "express";
import pool from "../dbConnector.mjs";

const products = express.Router();

//------------------------------------------------------------------------------
// Products
//------------------------------------------------------------------------------
products.get("/", (_, res) => {
    pool.query("SELECT * FROM Products;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

products.post("/", (req, res) => {
    const {
        productName,
        availability,
        price,
        restaurantID
    } = req.body
    pool.query(
        "INSERT INTO Products (productName, availability, price, restaurantID)\
            VALUES (?, ?, ?, ?);",
            [
                productName,
                availability,
                price,
                restaurantID
            ],
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(201).json({ status: "Product Created" })
            }
        });
});

export default products;
