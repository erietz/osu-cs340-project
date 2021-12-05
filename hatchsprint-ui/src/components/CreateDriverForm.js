import { useState } from 'react';
import DriverFormInputs from './DriverFormInputs';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function CreateDriver() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [licenseNumber, setLicenseNumber] = useState(null);

    const create = async (event) => {
        const newDriver = {firstName, lastName, licenseNumber};

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/drivers', {
            method: 'POST',
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

    const setStateFunctions = {
        setFirstName: setFirstName,
        setLastName: setLastName,
        setLicenseNumber: setLicenseNumber,
    }

    return (
        <Popup trigger={<button>Create Driver</button>} modal className="my-popup">
            <h2>Create a new driver</h2>

            <form onSubmit={create}>
                <br/>
                <DriverFormInputs setStateFunctions={setStateFunctions} defaultValues={{}}/>

                <br/>
                <br/>
                <button type="submit">Create</button>
                <br/>
            </form>
        </Popup>
    )
}
