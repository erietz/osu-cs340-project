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

orders.delete("/", (req, res) => {
    const body = req.body;
    pool.query(
        `DELETE FROM Orders WHERE orderID = "${body.orderID}"`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json({ status: "Order Deleted" })
            }
        });
});


export default orders;
