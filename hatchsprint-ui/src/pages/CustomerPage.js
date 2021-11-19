import { useState, useEffect } from "react";
import SideBar from "../components/Sidebar.js";
import CustomerForm from "../components/CreateCustomerForm.js";
import CustomerTable from "../components/CustomerTable.js";

export default function CustomerPage() {
    const [customers, setCustomers] = useState([]);

    const loadCustomers = async () => {
        const response = await fetch("/customers");
        const data = await response.json();
        setCustomers(data);
    }
    useEffect(() => loadCustomers(), []);

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Customers</h1>

            <CustomerForm/>
            <div className="table-container">
                <CustomerTable customers={customers}/>
            </div>

        </>
    )
}
