import { Link } from 'react-router-dom';
import SideBar from '../components/sidebar.js';

export default function HomePage() {
    return (
        <>
            <SideBar/>
            <br/>
            <h1>HatchSprint</h1>
            <ul>
                <li>
                    <Link to="/restaurants">Restaurant Stuff</Link>
                </li>
                <li>
                    <Link to="/customers">Customer Stuff</Link>
                </li>
                <li>
                    <Link to="/drivers">Driver Stuff</Link>
                </li>
                <li>
                    <Link to="/orders">Order Stuff</Link>
                </li>
                <li>
                    <Link to="/products">Product Stuff</Link>
                </li>
            </ul>
        </>
    )
}
