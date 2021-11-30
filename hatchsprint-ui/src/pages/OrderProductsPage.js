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

    return (
        <>
            <SideBar/>
            <br/>

            <h1>View OrderProducts</h1>
            <SearchOrderProducts/>
            <br/>
            <OrderProductsTable data={tableData}/>
        </>
    )
}
