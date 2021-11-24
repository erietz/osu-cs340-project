import express from "express";
import pool from "../dbConnector.mjs";

const orders = express.Router();

//------------------------------------------------------------------------------
// Orders
//------------------------------------------------------------------------------
orders.get("/", (_, res) => {
    pool.query("SELECT * FROM Orders;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.json(results);
        }
    });
});

export default orders;
