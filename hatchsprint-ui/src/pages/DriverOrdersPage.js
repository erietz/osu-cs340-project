import { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar.js';
import DriverOrdersTable from '../components/DriverOrdersTable';

export default function DriverOrdersPage() {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch("/api/driverorders")
            .then(d => d.json())
            .then(d => setData(d))
            .catch(err => console.error(err));
        }, []);

    return (
        <>
            <SideBar/>
            <br/>
            <h1>View Driver Orders</h1>
            <p>
                <ul>
                    <li>
                        This page allow you to view the one to many
                    relationship between drivers and orders. 
                    </li>
                    <li>
                        This is the only relationship which has partial
                    participation. 
                    </li>
                    <li>
                    When one creates an order, they can set the Driver ID to
                    ***Pickup Order*** which removes the relationship between
                    the order and the driver.
                    </li>
                </ul>
            </p >

            <div className="table-container">
                <DriverOrdersTable data={data}/>
            </div>
        </>
    )
}
