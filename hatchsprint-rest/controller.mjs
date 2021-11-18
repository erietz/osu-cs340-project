import express from "express";
import * as db from "./model.mjs";

const PORT = 9997;
const app = express();
app.use(express.json());

app.get("/customers", (_, res) => {
    db.pool.query("SELECT * FROM Customers;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            res.json(results);
        }
    });
});

app.get("/restaurants", (_, res) => {
    db.pool.query("SELECT * FROM Restaurants;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            console.log(results);
            res.json(results);
        }
    });
});

app.get("/orders", (_, res) => {
    db.pool.query("SELECT * FROM Orders;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

app.get("/products", (_, res) => {
    db.pool.query("SELECT * FROM Products;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

app.get("/drivers", (_, res) => {
    db.pool.query("SELECT * FROM Drivers;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
