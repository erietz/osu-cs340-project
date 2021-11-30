import express from "express";
import pool from "../dbConnector.mjs";

const orderproducts = express.Router();

orderproducts.get("/", (req, res) => {
    const orderID = req.query.orderID;
    let whereClause;
    if (orderID === undefined || orderID === null) {
        whereClause = "";
    } else {
        whereClause = `WHERE op.orderID = ${orderID}`;
    }
    console.log(req.params);
    pool.query(
        `SELECT op.orderID, op.productID, p.productName
        FROM OrderProducts op INNER JOIN
        Products p on p.productID = op.productID
        ${whereClause}
        ;`
        , (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

export default orderproducts;
