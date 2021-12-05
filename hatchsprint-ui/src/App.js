import './App.css';
import HomePage from './pages/HomePage.js';
import RestaurantPage from './pages/RestaurantPage.js';
import CustomerPage from './pages/CustomerPage.js';
import DriverPage from './pages/DriverPage.js';
import EditDriverPage from './pages/EditDriverPage.js';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import RestaurantCustomersPage from './pages/RestaurantCustomersPage';
import OrderProductsPage from './pages/OrderProductsPage';
import DriverOrdersPage from './pages/DriverOrdersPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

    const [driverToEdit, setDriverToEdit] = useState();

    return (
        <div className="App">
            <Router>

                <Route path="/" exact>
                    <HomePage/>
                </Route>

                <Route path="/restaurants" exact>
                    <RestaurantPage/>
                </Route>

                <Route path="/customers" exact>
                    <CustomerPage/>
                </Route>

                <Route path="/drivers" exact>
                    <DriverPage setDriverToEdit={setDriverToEdit}/>
                </Route>

                <Route path="/editdriver" exact>
                    <EditDriverPage driverToEdit={driverToEdit}/>
                </Route>

                <Route path="/orders" exact>
                    <OrderPage/>
                </Route>

                <Route path="/products" exact>
                    <ProductPage/>
                </Route>

                <Route path="/orderproducts" exact>
                    <OrderProductsPage/>
                </Route>

                <Route path="/restaurantcustomers" exact>
                    <RestaurantCustomersPage/>
                </Route>

                <Route path="/driverorders" exact>
                    <DriverOrdersPage/>
                </Route>

            </Router>
        </div>
    );
}

export default App;
