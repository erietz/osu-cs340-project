import { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar.js';
import OrderForm from '../components/CreateOrderForm.js';
import OrderTable from '../components/OrderTable.js';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function OrderPage() {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        fetch("/api/orders")
            .then(data => data.json())
            .then(json => setOrders(json))
            .catch(err => console.error(err));
    }, [])


    const onDelete = async _id => {
        const orderID = {'orderID': _id}
        const response = await fetch(`/api/orders`, { 
            method: 'DELETE',
            body: JSON.stringify(orderID),
            headers: {
                'Content-Type': 'application/json'
            }
         });
        if (response.status === 200) {
            fetch("/api/orders")
            .then(data => data.json())
            .then(json => setOrders(json))
            .catch(err => console.error(err));
        } else {
            console.error(`Failed to delete order with id = ${_id}, status code = ${response.status}`);
        }
    };

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Orders</h1>


            <Popup
                trigger={<button> Create New Order </button>}
                modal
                className="my-popup"
                contentStyle={{ overflowY: 'scroll', margin: '10px auto' }}
            >
                <h2>Create a new Order</h2>
                <p>
                    Make sure to set the Restaurant ID before adding products.
                </p>
                <OrderForm/>
            </Popup>

            <br/>
            <br/>

            <div className="table-container">
                <OrderTable orders={orders} onDelete={onDelete}/>
            </div>
        </>
    )
}
