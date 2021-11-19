import { useState } from 'react';

export default function CreateCustomer() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [streetAddress1, setStreetAddress1] = useState('');
    const [streetAddress2, setStreetAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');

    const create = async () => {
        const newCustomer = {fname, lname, email, password, streetAddress1,
            streetAddress2, city, state, zip, phone}

        const response = await fetch('/customer', {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.reload(false);
    }

    return (
        <>
            <div className="multicolumn">

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
                    placeholder = "Last Name"
                    onChange={e => setLname(e.target.value)}
                />
                <br/>

                <label for="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <br/>

                <label for="password">Password</label>
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <br/>

                <label for="streetAddress1">Street Address 1</label>
                <input
                    type="text"
                    id="streetAddress1"
                    name="streetAddress1"
                    placeholder="Address Line 1"
                    onChange={e => setStreetAddress1(e.target.value)}
                />
                <br/>

                <label for="streetAddress2">Street Address 2</label>
                <input
                    type="text"
                    id="streetAddress2"
                    name="streetAddress2"
                    placeholder="Address Line 2"
                    onChange={e => setStreetAddress2(e.target.value)}
                />
                <br/>

                <label for="city">city</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={e => setCity(e.target.value)}
                />
                <br/>

                <label for="state">state</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={e => setState(e.target.value)}
                />
                <br/>

                <label for="zip">zip</label>
                <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="Zip Code"
                    onChange={e => setZip(e.target.value)}
                />
                <br/>

                <label for="phone">Phone Number</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={e => setPhone(e.target.value)}
                />
                <br/>
            </div>
            <button onClick={create}>Create</button>
        </>
    )
}
