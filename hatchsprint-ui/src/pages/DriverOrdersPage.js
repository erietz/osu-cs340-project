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
            <h1>View Relationship Between Drivers and Orders</h1>
            <div style={{"text-align": "left"}}>
                <p>
                    <ul>
                        <li>
                            This page allows one to view the one to many
                        relationship between drivers and orders. 
                        </li>
                        <li>
                            This is the only relationship which has partial
                        participation. 
                        </li>
                        <li>
                            When an order is created, it is directly tied to a
                        customer and products of which are directly tied to a
                        restaurant.
                        </li>
                        <li>
                            When one creates an order, they can set the Driver
                        ID to ***Pickup Order*** which removes the relationship
                        between the order and the driver.
                        </li>
                        <li>
                            The results of this nullable relationship can be
                        verified by this table.
                        </li>
                    </ul>
                </p >
            </div>

            <div className="table-container">
                <DriverOrdersTable data={data}/>
            </div>
        </>
    )
}
