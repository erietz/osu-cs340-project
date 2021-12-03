import { useState, useEffect } from "react";
import SideBar from "../components/Sidebar.js";
import CustomerForm from "../components/CreateCustomerForm.js";
import CustomerTable from "../components/CustomerTable.js";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function CustomerPage() {
    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        const response = await fetch("/api/customers");
        const data = await response.json();
        setCustomers(data);
    }
    useEffect(() => loadCustomers(), []);


    const onDelete = async _id => {
        const customerID = {'customerID': _id}
        const response = await fetch(`/api/customers`, { 
            method: 'DELETE',
            body: JSON.stringify(customerID),
            headers: {
                'Content-Type': 'application/json'
            }
         });
        if (response.status === 200) {
            fetch("/api/customers")
            .then(data => data.json())
            .then(json => setCustomers(json))
            .catch(err => console.error(err));
        } else {
            console.error(`Failed to delete customer with id = ${_id}, status code = ${response.status}`);
        }
    };


    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Customers</h1>

            <Popup trigger={<button> Create New Customer </button>} modal className="my-popup">
                <h2>Create a new Customer</h2>
                <CustomerForm/>
            </Popup>

            <br/>
            <br/>

            <div className="table-container">
                <CustomerTable customers={customers} onDelete = {onDelete}/>
            </div>

        </>
    )
}
