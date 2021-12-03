import { useState } from 'react';

export default function CreateCustomer() {
    const [firstName, setFname] = useState(null);
    const [lastName, setLname] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [streetAddress1, setStreetAddress1] = useState(null);
    const [streetAddress2, setStreetAddress2] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);
    const [phone, setPhone] = useState(null);

    const create = async (event) => {
        const newCustomer = {firstName, lastName, email, password, streetAddress1,
            streetAddress2, city, state, zip, phone}

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/customers', {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Customer Created, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            alert(`Failed to create Customer, status code = ${response.status}`);
        }
    }

    return (
        <form onSubmit={create}>
            <div className="multicolumn">

                <label htmlFor="firstName">First Name</label>
                <input
                    required
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={e => setFname(e.target.value)}
                />
                <br/>

                <label htmlFor="lastName">Last Name</label>
                <input
                    required
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder = "Last Name"
                    onChange={e => setLname(e.target.value)}
                />
                <br/>

                <label htmlFor="email">Email</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={e => setEmail(e.target.value)}
                />
                <br/>

                <label htmlFor="password">Password</label>
                <input
                    required
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                />
                <br/>

                <label htmlFor="streetAddress1">Street Address 1</label>
                <input
                    required
                    type="text"
                    id="streetAddress1"
                    name="streetAddress1"
                    placeholder="Address Line 1"
                    onChange={e => setStreetAddress1(e.target.value)}
                />
                <br/>

                <label htmlFor="streetAddress2">Street Address 2</label>
                <input
                    type="text"
                    id="streetAddress2"
                    name="streetAddress2"
                    placeholder="Address Line 2"
                    onChange={e => setStreetAddress2(e.target.value)}
                />
                <br/>

                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={e => setCity(e.target.value)}
                />
                <br/>

                <label htmlFor="state">State</label>
                <input
                    required
                    type="text"
                    pattern="[A-Z]{2}"
                    title="Two digit capital abbreviation (e.g. AZ for arizona)"
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={e => setState(e.target.value)}
                />
                <br/>

                <label htmlFor="zip">Zip</label>
                <input
                    required
                    type="text"
                    pattern="[0-9]{5}"
                    title="Five digit zip code (e.g. 12345)"
                    id="zip"
                    name="zip"
                    placeholder="Zip Code"
                    onChange={e => setZip(e.target.value)}
                />
                <br/>

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={e => setPhone(e.target.value)}
                />
                <br/>
            </div>
            <button>Create</button>
        </form>
    )
}
