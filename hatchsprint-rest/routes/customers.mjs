import express, { response } from "express";
import pool from "../dbConnector.mjs";

const customers = express.Router();

//------------------------------------------------------------------------------
// Customers
//------------------------------------------------------------------------------
customers.get("/", (_, res) => {
    pool.query("SELECT * FROM Customers;", (error, results, _) => {
        if (error) {
            console.error(error);
            response.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

customers.post("/customer", (req, res) => {
    const {
        fname,
        lname,
        email,
        password,
        streetAddress1,
        streetAddress2,
        city,
        state,
        zip,
        phone
    } = req.body
    pool.query(
        "INSERT INTO Customers (firstName, lastName, email, password,\
            streetAddress1, streetAddress2, city, state, zip, phoneNumber)\
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        ,
        [
            fname,
            lname,
            email,
            password,
            streetAddress1,
            streetAddress2,
            city,
            state,
            zip,
            phone
        ],
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(201).json({ status: "Customer Created" })
            }
        });
});

export default customers;
