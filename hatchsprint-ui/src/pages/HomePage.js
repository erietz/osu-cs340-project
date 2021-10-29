import { Link } from 'react-router-dom';
import SideBar from '../components/sidebar.js';

export default function HomePage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>HatchSprint Home Page</h1>

            <p>
        On this page there will be a fancy logo here. We will also include
        fancy icons that correspond to each of the page links below.

            </p>

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
            </ul>
        </>
    )
}
