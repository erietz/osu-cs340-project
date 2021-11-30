import express from "express";
import pool from "../dbConnector.mjs";

const drivers = express.Router();

//------------------------------------------------------------------------------
// Drivers
//------------------------------------------------------------------------------
drivers.get("/", (_, res) => {
    pool.query("SELECT * FROM Drivers;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.status(200).json(results);
        }
    });
});

drivers.post("/", (req, res) => {
    const body = req.body;
    pool.query(
        `INSERT INTO Drivers (firstName, lastName, licenseNumber)\
            VALUES ("${body.fname}", "${body.lname}", "${body.license}");`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(201).json({ status: "Driver Created" })
            }
        });
});


// DELETE FROM Drivers WHERE driverID = :driverID;

drivers.delete("/", (req, res) => {
    const body = req.body;
    pool.query(
        `DELETE FROM Drivers WHERE driverID = "${body.driverID}"`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json({ status: "Driver Deleted" })
            }
        });
});

export default drivers;
