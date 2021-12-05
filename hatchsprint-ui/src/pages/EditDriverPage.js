import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DriverFormInputs from '../components/DriverFormInputs';
import 'reactjs-popup/dist/index.css';

export default function EditDriverPage({driverToEdit}) {
    const history = useHistory();

    const [firstName, setFirstName] = useState(driverToEdit.firstName);
    const [lastName, setLastName] = useState(driverToEdit.lastName);
    const [licenseNumber, setLicenseNumber] = useState(driverToEdit.licenseNumber);

    const updateDriver = async (event) => {
        event.preventDefault();
        const newDriver = {
            firstName: firstName,
            lastName: lastName,
            licenseNumber: licenseNumber
        };

        const response = await fetch(`/api/drivers?driverID=${driverToEdit.driverID}`, {
            method: 'PUT',
            body: JSON.stringify(newDriver),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            alert(`Driver updated, status code = ${response.status}`);
        } else {
            alert(`Failed to update driver, status code = ${response.status}`);
            console.error(response.error);
        }
        history.push("/drivers");
    }

    const setStateFunctions = {
        setFirstName: setFirstName,
        setLastName: setLastName,
        setLicenseNumber: setLicenseNumber,
    }

    const defaultValues = {
        firstName: firstName,
        lastName: lastName,
        licenseNumber: licenseNumber
    }

    return (
        <>
            <h2>Edit a Driver</h2>
            <form onSubmit={updateDriver}>
                <DriverFormInputs setStateFunctions={setStateFunctions} defaultValues={defaultValues}/>
                <br/>
                <br/>
                <button type="submit">Update Driver</button>
            </form>
        </>

    )

}
