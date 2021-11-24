import express from "express";
import pool from "../dbConnector.mjs";

const orderproducts = express.Router();

//------------------------------------------------------------------------------
// OrderProducts
//------------------------------------------------------------------------------
orderproducts.get("/", (_, res) => {
    pool.query("SELECT * FROM OrderProducts;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

export default orderproducts;
