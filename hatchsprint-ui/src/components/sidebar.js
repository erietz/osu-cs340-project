import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div class="sidebar">
            <header><Link to="/">HatchSprint</Link></header>
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
        </div>
    )
}
