import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import SideBar from '../components/Sidebar.js';
import RestaurantCustomersTable from '../components/RestaurantCustomersTable.js';
import RestaurantDataList from '../components/RestaurantDataList.js';
import AddCustomerToRestaurant from "../components/AddCustomerToRestaurantForm.js";

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

    const [id, setID] = useState("reset");
    const search = async (event) => {
        event.preventDefault();
        if (id === "reset") {
        fetch(`/api/restaurantcustomers`)
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
        } else {
            fetch(`/api/restaurantcustomers?restaurantID=${id}`)
                .then(data => data.json())
                .then(json => setTableData(json))
                .catch(err => console.error(err));
        }
    }

    const onDelete = async (restaurantID, customerID) => {
        const body = {
                customerID: customerID,
                restaurantID: restaurantID
            }
        const response = await fetch("/api/restaurantcustomers", {
                method: "DELETE",
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        if (response.status === 200) {
            fetch("/api/restaurantcustomers")
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
        } else {
            console.error(`Failed to delete restaurantcustomers with id = ${id}, status code = ${response.status}`);
        }
    }

    return (
        <>
            <SideBar/>
            <br/>

            <h1>RestaurantCustomers</h1>

            <Popup trigger={<button> Add Customer to Restaurant </button>} modal className="my-popup">
                <h2>Add Customer to Restaurant</h2>
                <AddCustomerToRestaurant/></Popup>

            <form onSubmit={search}>
                <label htmlFor="restaurantcustomers">
                Search RestaurantCustomers by Restaurant ID.
                </label> 
                <select
                    type="text"
                    placeholder="Enter restaurant ID"
                    onChange={e => setID(e.target.value)}
                >
                    <option value="reset" label="Reset Search"/>
                    <RestaurantDataList restaurantData={restaurantData} id="restaurantIDs"/>
                </select>
                <button>Search</button>
                <br/>
            </form>

            <div className="table-container">
                <RestaurantCustomersTable data={tableData} onDelete={onDelete}/>
            </div>
            <br/>
        </>
    )
}
