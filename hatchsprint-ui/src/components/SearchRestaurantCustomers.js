import { useState } from "react";
import RestaurantDataList from '../components/RestaurantDataList.js';

export default function SearchRestaurantCustomers( {restaurantData}) {
    const [id, setID] = useState('');
    const search = async (event) => {
        event.preventDefault();
        if (id === "") {
            window.location.reload();
            return;
        }
        fetch(`/api/restaurantcustomers?restaurantID=${id}`)
            .then(data => data.json())
            .then(json => setID(json))
            .catch(err => console.error(err));
    }
    return (
        <form onSubmit={search}>
            <label htmlFor="restaurantcustomers">Search RestaurantCustomers</label>
            <input
                type="text"
                placeholder="Enter restaurant ID"
                list="restaurantIDs"
            ></input>
            <RestaurantDataList restaurantData={restaurantData} id="restaurantIDs"/>
            <button>Search</button>
            <br/>
        </form>
    )
}
