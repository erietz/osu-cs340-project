import './App.css';
import HomePage from './pages/HomePage.js';
import RestaurantPage from './pages/RestaurantPage.js';
import CustomerPage from './pages/CustomerPage.js';
import DriverPage from './pages/DriverPage.js';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import RestaurantCustomersPage from './pages/RestaurantCustomers';
import OrderProductsPage from './pages/OrderProductsPage';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
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
                <DriverPage/>
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

        </Router>
    </div>
  );
}

export default App;
