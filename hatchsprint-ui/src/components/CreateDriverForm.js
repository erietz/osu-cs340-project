import { useState } from 'react';

export default function CreateDriver() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [license, setLicense] = useState('');

    const create = async (event) => {
        const newDriver = {fname, lname, license};

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

    return (
        <form onSubmit={create}>
            <label htmlFor="fname">First Name</label>
            <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                onChange={e => setFname(e.target.value)}
            />
            <br/>

            <label htmlFor="lname">Last Name</label>
            <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                onChange={e => setLname(e.target.value)}
            />
            <br/>

            <label htmlFor="license">License Number</label>
            <input
                type="text"
                id="license"
                name="license"
                placeholder="License Number"
                onChange={e => setLicense(e.target.value)}
            />
            <br/>

            <button type="submit">Create</button>
        </form>
    )
}
