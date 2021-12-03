import { useState, useEffect } from 'react';
import AddAnotherProduct from './AddAnotherProduct.js';
import RestaurantDataList from '../components/RestaurantDataList.js';
import CustomerDataList from '../components/CustomerDataList.js';
import DriverDataList from '../components/DriverDataList.js';

export default function CreateOrder() {
    const [preTaxCost, setPreTaxCost] = useState('');
    const [tax, setTax] = useState('');
    const [tip, setTip] = useState('');
    const [customerID, setCustomerID] = useState('');
    const [restaurantID, setRestaurantID] = useState('');
    const [driverID, setDriverID] = useState('');
    const [productIDs, setProductIDs] = useState([]);

    const [restaurantData, setRestaurantData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [driverData, setDriverData] = useState([]);

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

    useEffect( () => {
        fetch("/api/restaurants")
            .then(data => data.json())
            .then(json => setRestaurantData(json))
            .catch(error => console.error(error));
    }, []);

    useEffect( () => {
        fetch("/api/customers")
            .then(data => data.json())
            .then(json => setCustomerData(json))
            .catch(error => console.error(error));
    }, []);

    useEffect( () => {
        fetch("/api/drivers")
            .then(data => data.json())
            .then(json => setDriverData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <form onSubmit={create}>
            <div className="multicolumn">
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
                    placeholder="Enter Customer ID"
                    onChange={e => setCustomerID(e.target.value)}
                    list="customerIDs"
                ></input>
                <CustomerDataList customerData={customerData} id="customerIDs"/>
                <br/>

                <label htmlFor="restaurantID">Restaurant ID </label>
                <input
                    type="text"
                    placeholder="Enter Restaurant ID"
                    onChange={e => setRestaurantID(e.target.value)}
                    list="restaurantIDs"
                ></input>
                <RestaurantDataList restaurantData={restaurantData} id="restaurantIDs"/>
                <br/>

                <label htmlFor="driverID">Driver ID </label>
                <input
                    type="text"
                    placeholder="Enter Driver ID"
                    onChange={e => setDriverID(e.target.value)}
                    list="driverIDs"
                ></input>
                <DriverDataList driverData={driverData} id="driverIDs"/>
                <br/>

                <br/>
                </div>

                <br/>
                <AddAnotherProduct productIDs={productIDs} setProductIDs={setProductIDs}/>
                <br/>

            <button>Create</button>
        </form>
    )
}
