import { Link } from 'react-router-dom';
import SideBar from '../components/Sidebar.js';

export default function HomePage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>HatchSprint Home Page</h1>

            <ul>
                <li>
                    <Link to="/restaurants">Restaurants</Link>
                </li>
                <li>
                    <Link to="/customers">Customers</Link>
                </li>
                <li>
                    <Link to="/drivers">Drivers</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/orderproducts">OrderProducts</Link>
                </li>
                <li>
                    <Link to="/restaurantcustomers">RestaurantCustomers</Link>
                </li>
                <li>
                    <Link to="/driverorders">DriverOrders</Link>
                </li>
            </ul>
        </>
    )
}
