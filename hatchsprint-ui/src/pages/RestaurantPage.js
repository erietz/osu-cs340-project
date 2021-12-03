import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import CreateRestaurant from '../components/CreateRestaurantForm.js';
import RestaurantTable from '../components/RestaurantTable.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function RestaurantPage() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch("/api/restaurants")
            .then(data => data.json())
            .then(data => setRestaurants(data))
            .catch(err => console.error(err));
    }, []);


    const onDelete = async _id => {
        const restaurantID = {'restaurantID': _id}
        const response = await fetch(`/api/restaurants`, { 
            method: 'DELETE',
            body: JSON.stringify(restaurantID),
            headers: {
                'Content-Type': 'application/json'
            }
         });
        if (response.status === 200) {
            fetch("/api/restaurants")
            .then(data => data.json())
            .then(json => setRestaurants(json))
            .catch(err => console.error(err));
        } else {
            console.error(`Failed to delete restaurant with id = ${_id}, status code = ${response.status}`);
        }
    };

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Restaurants</h1>

            <Popup trigger={<button> Create New Restaurant </button>} modal className="my-popup">
                <CreateRestaurant/>
            </Popup>

            <br/>
            <br/>

            <div className="table-container">
                <RestaurantTable restaurants={restaurants} onDelete = {onDelete}/>
            </div>
        </>
    )
}
