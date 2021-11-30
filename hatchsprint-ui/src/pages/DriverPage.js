import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import CreateDriver from '../components/CreateDriverForm.js';
import DriverTable from '../components/DriverTable.js';

export default function DriverPage() {
    const [drivers, setDrivers] = useState([]);
    useEffect( () => {
        fetch("/api/drivers")
            .then(data => data.json())
            .then(json => setDrivers(json))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Drivers</h1>

            <CreateDriver/>
            <div className="table-container">
                <DriverTable drivers={drivers}/>
            </div>

        </>
    )
}
