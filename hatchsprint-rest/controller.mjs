import express from "express";
import * as db from "./model.mjs";

const PORT = 9124;
const app = express();
app.use(express.json());

app.get("/customers", (req, res) => {
    db.pool.query("SELECT * FROM Customers;", (error, results, fields) => {
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
