import express from "express";
import * as db from "./model.mjs";

const PORT = 9997;
const app = express();
app.use(express.json());

//------------------------------------------------------------------------------
// Customers
//------------------------------------------------------------------------------
app.get("/customers", (_, res) => {
    db.pool.query("SELECT * FROM Customers;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

app.post("/customer", (req, res) => {
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
    db.pool.query(
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
        (error, _, _) => {
            if (error) {
                console.error(error);
                res.status(400).json(error);
            } else {
                res.status(201).json({ status: "Customer Created" })
            }
        });
});

//------------------------------------------------------------------------------
// Restaurants
//------------------------------------------------------------------------------
app.get("/restaurants", (_, res) => {
    db.pool.query("SELECT * FROM Restaurants;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

//------------------------------------------------------------------------------
// Orders
//------------------------------------------------------------------------------
app.get("/orders", (_, res) => {
    db.pool.query("SELECT * FROM Orders;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

//------------------------------------------------------------------------------
// Products
//------------------------------------------------------------------------------
app.get("/products", (_, res) => {
    db.pool.query("SELECT * FROM Products;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

app.post("/product", (req, res) => {
    const body = req.body;
    db.pool.query(
        `INSERT INTO Products (productName, availability, price, restaurantID)\
            VALUES ("${body.name}", "${body.available}", "${body.price}", "${body.restid}");`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
            } else {
                res.status(200).send("Product Created")
            }
        });
});

//------------------------------------------------------------------------------
// Drivers
//------------------------------------------------------------------------------
app.get("/drivers", (_, res) => {
    db.pool.query("SELECT * FROM Drivers;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

app.post("/driver", (req, res) => {
    const body = req.body;
    db.pool.query(
        `INSERT INTO Drivers (firstName, lastName, licenseNumber)\
            VALUES ("${body.fname}", "${body.lname}", "${body.license}");`,
        (error, results, fields) => {
            if (error) {
                console.error(error);
            } else {
                res.status(200).send("Driver Created")
            }
        });
});

//------------------------------------------------------------------------------
// OrderProducts
//------------------------------------------------------------------------------
app.get("/orderproducts", (_, res) => {
    db.pool.query("SELECT * FROM OrderProducts;", (error, results, _) => {
        if (error) {
            console.error(error);
        } else {
            res.json(results);
        }
    });
});

//------------------------------------------------------------------------------
// RestaurantCustomers
//------------------------------------------------------------------------------
app.get("/restaurantcustomers", (_, res) => {
    db.pool.query("SELECT * FROM RestaurantCustomers;", (error, results, _) => {
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
