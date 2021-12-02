import { useState } from 'react';
import AddAnotherProduct from './AddAnotherProduct.js';

export default function CreateOrder() {
    const [preTaxCost, setPreTaxCost] = useState('');
    const [tax, setTax] = useState('');
    const [tip, setTip] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [restaurantID, setRestaurantID] = useState('');
    const [driverID, setDriverID] = useState('');
    const [productIDs, setProductIDs] = useState([]);

    const create = async (event) => {
        const newOrder = {preTaxCost, tax, tip, customerID, restaurantID, driverID, productIDs}

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/orders', {
            method: 'POST',
            body: JSON.stringify(newOrder),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Order Created, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            alert(`Failed to create Order, status code = ${response.status}`);
            console.error(response.error);
        }
    }

    return (
        <form onSubmit={create}>

            <label htmlFor="preTaxCost">Pre-Tax Cost</label>
            <input
                type="text"
                id="preTaxCost"
                name="preTaxCost"
                placeholder="Pre-Tax Cost"
                onChange={e => setPreTaxCost(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="tax">Tax</label>
            <input
                type="text"
                id="tax"
                name="tax"
                placeholder="Tax"
                onChange={e => setTax(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="tip">Tip</label>
            <input
                type="text"
                id="tip"
                name="tip"
                placeholder="Tip"
                onChange={e => setTip(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="customerID">Customer ID</label>
            <input
                type="text"
                id="customerID"
                name="customerID"
                placeholder="Enter Customer ID"
                onChange={e => setCustomerID(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="restaurantID">Restaurant ID </label>
            <input
                type="text"
                id="restaurantID"
                name="restaurantID"
                placeholder="Enter Restaurant ID"
                onChange={e => setRestaurantID(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="driverID">Driver ID </label>
            <input
                type="text"
                id="driverID"
                name="driverID"
                placeholder="Enter Driver ID"
                onChange={e => setDriverID(e.target.value)}
            ></input>
            <br/>

            <div className="multicolumn">
                <AddAnotherProduct productIDs={productIDs} setProductIDs={setProductIDs}/>
            </div>

            <button>Create</button>
        </form>
    )
}
