import { useState, useEffect } from 'react';
import AddAnotherProduct from './AddAnotherProduct.js';
import RestaurantDataList from '../components/RestaurantDataList.js';
import CustomerDataList from '../components/CustomerDataList.js';
import DriverDataList from '../components/DriverDataList.js';

export default function CreateOrder() {
    const [preTaxCost, setPreTaxCost] = useState(null);
    const [tax, setTax] = useState(null);
    const [tip, setTip] = useState(null);
    const [customerID, setCustomerID] = useState(null);
    const [restaurantID, setRestaurantID] = useState(null);
    const [driverID, setDriverID] = useState(null);
    const [productIDs, setProductIDs] = useState([]);

    const [restaurantData, setRestaurantData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [driverData, setDriverData] = useState([]);
    const [productData, setProductData] = useState([]);

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

    const handleSetRestaurant = async (event) => {
        setRestaurantID(event.target.value)
        fetch(`/api/products?restaurantID=${event.target.value}`)
            .then(data => data.json())
            .then(json => setProductData(json))
            .catch(error => console.error(error));
    }

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
            <div className="multicolumn">
                <label htmlFor="preTaxCost">Pre-Tax Cost</label>
                <input
                    required
                    type="number"
                    step="0.01"
                    id="preTaxCost"
                    name="preTaxCost"
                    placeholder="Pre-Tax Cost"
                    onChange={e => setPreTaxCost(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="tax">Tax</label>
                <input
                    required
                    type="number"
                    step="0.01"
                    id="tax"
                    name="tax"
                    placeholder="Tax"
                    onChange={e => setTax(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="tip">Tip</label>
                <input
                    required
                    type="number"
                    step="0.01"
                    id="tip"
                    name="tip"
                    placeholder="Tip"
                    onChange={e => setTip(e.target.value)}
                ></input>
                <br/>

                <label htmlFor="customerID">Customer ID</label>
                <select
                    required
                    name="customerID"
                    placeholder="Enter Customer ID"
                    onChange={e => setCustomerID(e.target.value)}
                    list="customerIDs"
                >
                    <option label=""/>
                    <CustomerDataList customerData={customerData} id="customerIDs"/>
                </select>
                <br/>

                <label htmlFor="restaurantID">Restaurant ID </label>
                <select
                    required
                    name="restaurantID"
                    placeholder="Enter Restaurant ID"
                    onChange={e => handleSetRestaurant(e)}
                >
                    <option label=""/>
                    <RestaurantDataList restaurantData={restaurantData}/>
                </select>
                <br/>

                <label htmlFor="driverID">Driver ID </label>
                <select
                    required
                    name="driverID"
                    placeholder="Enter Driver ID"
                    onChange={e => setDriverID(e.target.value)}
                >
                    <option label=""/>
                    <option value="" label="***Pickup Order***"/>
                    <DriverDataList driverData={driverData}/>
                </select>
                <br/>
                <br/>

                </div>

                <AddAnotherProduct
                    productIDs={productIDs}
                    setProductIDs={setProductIDs}
                    productData={productData}
                />

                <br/>
            <button>Create</button>
        </form>
    )
}
