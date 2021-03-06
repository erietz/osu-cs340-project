import express from "express";
import pool from "../dbConnector.mjs";

const orders = express.Router();

const insertIntoOrderProducts = (orderID, productID) => {
    pool.query(
        `
        INSERT INTO OrderProducts (orderID, productID)
        VALUES (?, ?)
        ;
        `,
        [
            orderID,
            productID
        ],
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
        VALUES (?, ?)
        ;
        `,
        [
            customerID,
            restaurantID
        ],
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
    const orderID = _.query.orderID
    if (orderID === undefined || orderID === null){
    pool.query("SELECT * FROM Orders;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
}
    else{
        pool.query(
            "SELECT * FROM Orders o WHERE o.orderID = ?;",
            [orderID],
            (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    }
});

orders.get("/restaurantproducts", (_, res) => {
    const orderID = _.query.orderID
    if (orderID === undefined || orderID === null){
    pool.query("SELECT * FROM Orders;", (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {
            res.status(200).json(results);
        }
    });
}
    else{
        pool.query(
            "SELECT p.* FROM Products p LEFT JOIN Orders o ON p.restaurantID = o.restaurantID WHERE o.orderID = ? AND p.productID NOT IN (SELECT productID FROM OrderProducts WHERE orderID = ?);",
            [orderID, orderID],
            (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        });
    }
});

orders.delete("/", (req, res) => {
    const body = req.body;
    pool.query(
        "DELETE FROM Orders WHERE orderID = ?", [body.orderID],
        (error, results, fields) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json({ status: "Order Deleted" })
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

    if (productIDs.length === 0) {
        res.status(400).json({ error: "Order has no products" });
        return;
    }

    const driverIDMaybeNull = driverID === "" || driverID === "null" ? null : driverID

    const totalCost = parseInt(preTaxCost) + parseInt(tax) + parseInt(tip);
    const [date, time] = new Date().toISOString().split('T');

    // Insert into Orders table-------------------------------------------------
    pool.query(
        `
        INSERT INTO Orders
            (preTaxCost, tax, tip, totalCost, \`date\`, time, customerID,
            driverID, restaurantID)
        VALUES 
            (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
        [
            preTaxCost,
            tax,
            tip,
            totalCost,
            date,
            time,
            customerID,
            driverIDMaybeNull,
            restaurantID
        ],
        (error, results, _) => {
        if (error) {
            console.error(error);
            res.status(400).json(error);
        } else {

            // Insert into OrderProducts table
            const orderID = results.insertId;
            productIDs.forEach((productID) => insertIntoOrderProducts(parseInt(orderID), parseInt(productID)));

            // Insert into RestaurantCustomers table
            insertIntoRestaurantCustomers(parseInt(restaurantID), parseInt(customerID));
            res.status(201).json(results);
        }
    });


});

export default orders;
