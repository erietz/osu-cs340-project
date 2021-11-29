import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import CreateRestaurant from '../components/CreateRestaurantForm.js';
import RestaurantTable from '../components/RestaurantTable.js';

export default function RestaurantPage() {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        fetch("/api/restaurants")
            .then(data => data.json())
            .then(data => setRestaurants(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Restaurants</h1>

            <CreateRestaurant/>
            <br/>

            <div className="table-container">
                <RestaurantTable restaurants={restaurants}/>
            </div>
        </>
    )
}
