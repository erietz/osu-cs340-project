import express from "express";
import customers from "./routes/customers.mjs";
import drivers from "./routes/drivers.mjs";
import restaurants from "./routes/restaurants.mjs";
import products from "./routes/products.mjs";
import orders from "./routes/orders.mjs";
import restaurantcustomers from "./routes/restaurantcustomers.mjs";
import orderproducts from "./routes/orderproducts.mjs";
import driverorders from "./routes/driverorders.mjs";

const PORT = 9997;
const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use("/api/customers", customers);
app.use("/api/drivers", drivers);
app.use("/api/restaurants", restaurants);
app.use("/api/products", products);
app.use("/api/orders", orders);
app.use("/api/orderproducts", orderproducts);
app.use("/api/restaurantcustomers", restaurantcustomers);
app.use("/api/driverorders", driverorders);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
