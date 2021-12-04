import express from "express";
import pool from "../dbConnector.mjs";

const driverorders = express.Router();

driverorders.get("/", (req, res) => {
    const orderID = req.query.orderID;
    if (orderID === undefined || orderID === null) {
        pool.query(
            `SELECT o.orderID, o.driverID, d.firstName, d.lastName
            FROM Orders o INNER JOIN
            Drivers d on d.driverID = o.driverID
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
            `SELECT o.orderID, o.driverID, d.firstName, d.lastName
            FROM Orders o INNER JOIN
            Drivers d on d.driverID = o.driverID
            WHERE o.orderID = ?
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
})

export default driverorders;
