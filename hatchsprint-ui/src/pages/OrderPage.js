import { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar.js';
import OrderForm from '../components/CreateOrderForm.js';
import OrderTable from '../components/OrderTable.js';

export default function OrderPage() {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch("/orders")
            .then(data => data.json())
            .then(json => setOrders(json))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Orders</h1>
            <OrderForm/>

            <div className="table-container">
                <OrderTable orders={orders}/>
            </div>
        </>
    )
}
