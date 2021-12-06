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

orderproducts.delete("/", (req, res) => {
    const orderID = req.body.orderID;
    const productID = req.body.productID;
    pool.query(
        `DELETE FROM OrderProducts
        WHERE orderID = ? and productID = ?
        `,
        [
            orderID,
            productID
        ],
        (error, results, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(200).json(results);
            }
        }
    )
});

orderproducts.post("/", (req, res) => {

    const orderID = parseInt(req.body.orderID);
    const productID = parseInt(req.body.productID);

    const query1 = `SELECT restaurantId FROM Orders WHERE orderID = ${orderID}`;
    const query2 = `SELECT restaurantId FROM Products WHERE productID = ${productID}`;
    const query3 = `INSERT INTO OrderProducts (orderID, productID) VALUES (${orderID}, ${productID})`;

    pool.query(query1, (error, results, fields) => {
        let restaurantId;
        if (error) {
            console.error(error);
        } else {
            restaurantId = results[0].restaurantId;
        }
        pool.query(query2, (error, results, fields) => {
            console.log("RESTAURANTID", restaurantId);
            if (error) {
                console.error(error);
            } else if (restaurantId !== results[0].restaurantId) {
                res.json({ error: "Product does not belong to restaurant" });
                return;
            }
            pool.query(query3, (error, results, fields) => {
                if (error) {
                    console.error(error)
                } else {
                    res.status(201).json(results);
                }
            })
        })
    })
});


export default orderproducts;
