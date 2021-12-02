import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import SearchRestaurantCustomers from '../components/SearchRestaurantCustomers.js';
import RestaurantCustomersTable from '../components/RestaurantCustomersTable.js';

export default function RestaurantCustomersPage() {
    const [tableData, setTableData] = useState([]);

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect( () => {
        fetch("/api/restaurantcustomers")
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
    }, [])

    useEffect( () => {
        fetch("/api/restaurants")
            .then(data => data.json())
            .then(json => setRestaurantData(json))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <SideBar/>
            <br/>

            <h1>RestaurantCustomers</h1>
            <SearchRestaurantCustomers restaurantData={restaurantData}/>

            <div className="table-container">
                <RestaurantCustomersTable data={tableData}/>
            </div>
            <br/>
        </>
    )
}
