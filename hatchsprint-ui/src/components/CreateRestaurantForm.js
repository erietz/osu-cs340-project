import { useState } from 'react';

export default function CreateRestaurant() {
    const [restaurantName, setRestaurantName] = useState(null);
    const [streetAddress1, setStreetAddress1] = useState(null);
    const [streetAddress2, setStreetAddress2] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [zip, setZip] = useState(null);

    const create = async (event) => {
        const newRestaurant = {restaurantName, streetAddress1, streetAddress2, city, state,
            zip}

        event.preventDefault()  // do not reload the page
        const response = await fetch("/api/restaurants", {
            method: 'POST',
            body: JSON.stringify(newRestaurant),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Restaurant Created, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            console.error(response.error);
            alert(`Failed to create Restaurant, status code = ${response.status}`);
        }
    }

    return (
        <form onSubmit={create}>
            <div className="multicolumn">
                <label htmlFor="restaurantName">Restaurant Name</label>
                <input
                    type="text"
                    required
                    id="restaurantName"
                    name="restaurantName"
                    placeholder="Name"
                    onChange={e => setRestaurantName(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="streetAddress1">Street Address 1</label>
                <input
                    type="text"
                    required
                    id="streetAddress1"
                    name="streetAddress1"
                    placeholder="Address Line 1"
                    onChange={e => setStreetAddress1(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="streetAddress2">Street Address 2</label>
                <input
                    type="text"
                    id="streetAddress2"
                    name="streetAddress2"
                    placeholder="Address Line 2"
                    onChange={e => setStreetAddress2(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="city">city</label>
                <input
                    type="text"
                    required
                    id="city"
                    name="city"
                    placeholder="City"
                    onChange={e => setCity(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="state">state</label>
                <input
                    type="text"
                    required
                    pattern="[A-Z]{2}"
                    title="Two digit capital abbreviation (e.g. AZ for arizona)"
                    id="state"
                    name="state"
                    placeholder="State"
                    onChange={e => setState(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="zip">zip</label>
                <input
                    type="text"
                    required
                    pattern="[0-9]{5}"
                    title="Five digit zip code (e.g. 12345)"
                    id="zip"
                    name="zip"
                    placeholder="Zip"
                    onChange={e => setZip(e.target.value)}
                ></input>
                <br/>
            </div>
            <button>Create</button>
        </form>
    )
}
