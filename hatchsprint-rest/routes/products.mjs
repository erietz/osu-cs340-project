import express from "express";
import pool from "../dbConnector.mjs";

const products = express.Router();

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

products.delete("/", (req, res) => {
    const body = req.body;
    pool.query(
        `DELETE FROM Products WHERE productID = ?`, [body.productID],
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json({ status: "Product Deleted" })
            }
        });
});

export default products;
