import express from "express";
import pool from "../dbConnector.mjs";

const orderproducts = express.Router();

orderproducts.get("/", (req, res) => {
    const orderID = req.query.orderID;
    if (orderID === undefined || orderID === null) {
        pool.query(
            `SELECT op.orderID, op.productID, p.productName
            FROM OrderProducts op INNER JOIN
            Products p on p.productID = op.productID
            ;`,
            (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    } else {
        pool.query(
            `SELECT op.orderID, op.productID, p.productName
            FROM OrderProducts op INNER JOIN
            Products p on p.productID = op.productID
            WHERE op.orderID = ?
            ;`,
            [
                orderID
            ],
            (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                console.log(orderID);
                res.status(200).json(results);
            }
        });
    }
});

export default orderproducts;
