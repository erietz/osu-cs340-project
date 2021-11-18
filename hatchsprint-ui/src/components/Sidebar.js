import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className="sidebar">
            <header><Link to="/">HatchSprint</Link></header>
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
            </ul>
        </div>
    )
}
