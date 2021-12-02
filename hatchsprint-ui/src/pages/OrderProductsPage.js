import { useState, useEffect } from "react";
import SideBar from '../components/Sidebar.js';
import SearchOrderProducts from '../components/SearchOrderProducts.js';
import OrderProductsTable from '../components/OrderProductsTable.js';

export default function OrderProductsPage() {
    const [tableData, setTableData] = useState([]);

    useEffect( () => {
        fetch("/api/orderproducts")
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
    }, [])

    const [orderID, setOrderID] = useState('');
    const Search = async (event) => {
        event.preventDefault();
        if (orderID === "") {
            window.location.reload();
        }
        fetch(`/api/orderproducts?orderID=${orderID}`)
            .then(data => data.json())
            .then(json => setTableData(json))
            .catch(err => console.error(err));
    }

    return (
        <>
            <SideBar/>
            <br/>

            <h1>View OrderProducts</h1>


            <form onSubmit={Search} method="GET">
                <label htmlFor="orderID">Search OrderProducts</label>
                <input
                    type="text"
                    id="orderID"
                    name="orderID"
                    placeholder="Enter order ID"
                    onChange={e => setOrderID(e.target.value)}
                ></input>
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
