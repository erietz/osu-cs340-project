import { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import SideBar from '../components/Sidebar.js';
import CreateDriver from '../components/CreateDriverForm.js';
import DriverTable from '../components/DriverTable.js';

export default function DriverPage({ setDriverToEdit }) {
    const history = useHistory();
    const [drivers, setDrivers] = useState([]);

    useEffect( () => {
        fetch("/api/drivers")
            .then(data => data.json())
            .then(json => setDrivers(json))
            .catch(err => console.error(err));
    }, [])

    const onDelete = async _id => {
        const driverID = {'driverID': _id};
        const response = await fetch(`/api/drivers`, { 
            method: 'DELETE',
            body: JSON.stringify(driverID),
            headers: {
                'Content-Type': 'application/json'
            }
         });
        if (response.status === 200) {
            fetch("/api/drivers")
            .then(data => data.json())
            .then(json => setDrivers(json))
            .catch(err => console.error(err));
        } else {
            console.error(`Failed to delete driver with id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = driverToEdit => {
        setDriverToEdit(driverToEdit);
        history.push("/editdriver");
    }

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Drivers</h1>

            <CreateDriver/>

            <br/>
            <br/>

            <div className="table-container">
                <DriverTable drivers={drivers} onDelete={onDelete} onEdit={onEdit}/>
            </div>

        </>
    )
}
