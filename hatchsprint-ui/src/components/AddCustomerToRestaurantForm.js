import { useState, useEffect } from 'react';
import RestaurantDataList from './RestaurantDataList.js';
import CustomerDataList from './CustomerDataList.js';

export default function AddCustomerToRestaurant() {
    const [restaurantID, setRestaurantID] = useState(null);
    const [customerID, setCustomerID] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect( () => {
        fetch("/api/restaurants")
            .then(data => data.json())
            .then(json => setRestaurantData(json))
            .catch(error => console.error(error));
    }, []);

    const handleSetRestaurant = async (event) => {
        setRestaurantID(event.target.value)
        fetch(`/api/restaurantcustomers/availablecustomers?restaurantID=${event.target.value}`)
            .then(data => data.json())
            .then(json => setCustomerData(json))
            .catch(error => console.error(error));
        
    }

    const create = async (event) => {
        const newCustomer = {customerID, restaurantID}

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/restaurantcustomers', {
            method: 'POST',
            body: JSON.stringify(newCustomer),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Customer added, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            alert(`Failed to add customer, status code = ${response.status}`);
            console.error(response.error);
        }
    }

    return (
        <form onSubmit={create}>
            <div className="multicolumn">
            <label htmlFor="restaurantID">Restaurant ID </label>
                <select
                    required
                    name="restaurantID"
                    placeholder="Enter Restaurant ID"
                    onChange={e => handleSetRestaurant(e)}
                >
                    <option label=""/>
                    <RestaurantDataList restaurantData={restaurantData}/>
                </select>
                <br/>

                <label htmlFor="customerID">Customer ID </label>
                <select
                    required
                    name="customerID"
                    placeholder="Enter Customer ID"
                    onChange={e => setCustomerID(e.target.value)}
                >
                    <option label=""/>
                    <CustomerDataList customerData={customerData}/>
                </select>
                <br/>
                <br/>

                </div>

                <br/>
            <button>Create</button>
        </form>
    )
}
