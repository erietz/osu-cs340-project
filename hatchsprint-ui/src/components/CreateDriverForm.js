import { useState } from 'react';

export default function CreateDriver() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [license, setLicense] = useState('');

    const create = async () => {
        const newDriver = {fname, lname, license};

        const response = await fetch('/driver', {
            method: 'POST',
            body: JSON.stringify(newDriver),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload(false);
    }

    return (
        <>
            <label for="fname">First Name</label>
            <input
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                onChange={e => setFname(e.target.value)}
            />
            <br/>

            <label for="lname">Last Name</label>
            <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                onChange={e => setLname(e.target.value)}
            />
            <br/>

            <label for="license">License Number</label>
            <input
                type="text"
                id="license"
                name="license"
                placeholder="License Number"
                onChange={e => setLicense(e.target.value)}
            />
            <br/>

            <button onClick={create}>Create</button>
        </>
    )
}
