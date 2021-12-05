import { useState } from 'react';
import DriverFormInputs from './DriverFormInputs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function EditDriver() {
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);
    const [license, setLicense] = useState(null);

    const onEdit = async (event) => {
        const newDriver = {fname, lname, license};

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/drivers', {
            method: 'PUT',
            body: JSON.stringify(newDriver),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Driver Created, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            alert(`Failed to create driver, status code = ${response.status}`);
            console.error(response.error);
        }
    }

    const states = {
        setFname: setFname,
        setLname: setLname,
        setLicense: setLicense,
    }

    return (
        <>
            <h2>Edit a Driver</h2>
            <form onSubmit={}>
                <DriverFormInputs states={states}/>
            </form>

            <br/>
            <br/>
            <button type="submit">Edit</button>
            <br/>
        </>
    )

}
