import express from "express";
import pool from "../dbConnector.mjs";

const orders = express.Router();

const insertIntoOrderProducts = (orderID, productID) => {
    pool.query(
        `
        INSERT INTO OrderProducts (orderID, productID)
        VALUES (${orderID}, ${productID})
        ;
        `.replace(/\n/g, ""),
        (error, results, fields) => {
            if (error) {
                console.error(error);
            } else {
                console.log(results);
            }
        }
    )
};

const insertIntoRestaurantCustomers = (restaurantID, customerID) => {
    pool.query(
        `
        INSERT INTO RestaurantCustomers (customerID, restaurantID)
        VALUES (${customerID}, ${restaurantID})
        ;
        `.replace(/\n/g, ""),
        (error, results, fields) => {
            if (error) {
                console.error(error);
            } else {
                console.log(results);
            }
        }
    )
};

orders.get("/", (_, res) => {
    pool.query("SELECT * FROM Orders;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
});

orders.post("/", (req, res) => {

    // Parse out the variables--------------------------------------------------
    const {
        preTaxCost,
        tax,
        tip,
        driverID,
        customerID,
        restaurantID,
        productIDs
    } = req.body;

    const totalCost = preTaxCost + tax + tip;
    const [date, time] = new Date().toISOString().split('T');

    console.log("date", date, "time", time);

    // Insert into Orders table-------------------------------------------------
    pool.query(
        `
        INSERT INTO Orders
            (preTaxCost, tax, tip, totalCost, \`date\`, time, customerID,
            driverID, restaurantID)
        VALUES 
            (${preTaxCost}, ${tax}, ${tip}, ${totalCost}, ${date}, "${time}",
            ${customerID}, ${driverID}, ${restaurantID})

        `.replace(/\n/g, ""),
        {title: 'test'},
        (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            const orderID = results.insertId;
            productIDs.forEach((productID) => insertIntoOrderProducts(orderID, productID));
            res.status(201).json(results);
        }
    });

    // Insert into RestaurantCustomers table
    insertIntoRestaurantCustomers(restaurantID, customerID);

});

export default orders;
