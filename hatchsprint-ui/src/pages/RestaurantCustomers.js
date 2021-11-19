import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import CustomerForm from '../components/CreateCustomerForm.js';
import SearchRestaurantCustomers from '../components/SearchRestaurantCustomers.js';
import RestaurantCustomersTable from '../components/RestaurantCustomersTable.js';

export default function RestaurantCustomersPage() {
    const [tableData, setTableData] = useState([]);
    useEffect( () => {
        fetch("/restaurantcustomers")
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <SideBar/>
            <br/>

            <h1>RestaurantCustomers</h1>
            <SearchRestaurantCustomers/>
            <RestaurantCustomersTable data={tableData}/>
            <br/>
        </>
    )
}
