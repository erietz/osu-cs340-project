import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import OrderProductsTable from '../components/OrderProductsTable.js';
import OrderDataList from '../components/OrderDataList.js';

export default function OrderProductsPage() {
    const [tableData, setTableData] = useState([]);
    const [orderData, setOrderData] = useState([]);

    useEffect( () => {
        fetch("/api/orderproducts")
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
    }, [])

    const [orderID, setOrderID] = useState("reset");
    const Search = async (event) => {
        event.preventDefault();
        if (orderID === "reset") {
            fetch(`/api/orderproducts`)
                .then(data => data.json())
                .then(json => setTableData(json))
                .catch(err => console.error(err));
        } else {
            fetch(`/api/orderproducts?orderID=${orderID}`)
                .then(data => data.json())
                .then(json => setTableData(json))
                .catch(err => console.error(err));
        }
    }

    useEffect( () => {
        fetch("/api/orders")
            .then(data => data.json())
            .then(json => setOrderData(json))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <SideBar/>
            <br/>

            <h1>View OrderProducts</h1>


            <form onSubmit={Search} method="GET">
                <label htmlFor="orderID">Search OrderProducts by Order ID</label>
                <select
                    type="text"
                    placeholder="Enter order ID"
                    onChange={e => setOrderID(e.target.value)}
                >
                    <option value="reset">Reset Search</option>
                    <OrderDataList orderData={orderData}/>
                </select>
                <button>Search</button>
                <br/>
            </form>


            <br/>
            <div className="table-container">
                <OrderProductsTable data={tableData}/>
            </div>
        </>
    )
}
