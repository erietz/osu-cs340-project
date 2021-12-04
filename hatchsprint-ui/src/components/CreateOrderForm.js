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
                <input
                    required
                    type="number"
                    placeholder="Enter Customer ID"
                    onChange={e => setCustomerID(e.target.value)}
                    list="customerIDs"
                ></input>
                <CustomerDataList customerData={customerData} id="customerIDs"/>
                <br/>

                <label htmlFor="restaurantID">Restaurant ID </label>
                <input
                    required
                    type="number"
                    placeholder="Enter Restaurant ID"
                    onChange={e => handleSetRestaurant(e)}
                    list="restaurantIDs"
                ></input>
                <RestaurantDataList restaurantData={restaurantData} id="restaurantIDs"/>
                <br/>

                <label htmlFor="driverID">Driver ID </label>
                <input
                    required
                    type="numbers"
                    placeholder="Enter Driver ID"
                    onChange={e => setDriverID(e.target.value)}
                    list="driverIDs"
                ></input>
                <DriverDataList driverData={driverData} id="driverIDs"/>
                <br/>

                <br/>
                </div>

                <br/>
                <AddAnotherProduct
                    productIDs={productIDs}
                    setProductIDs={setProductIDs}
                    restaurantID={restaurantID}
                    productData={productData}
                    setProductData={setProductData}
                />
                <br/>

            <button>Create</button>
        </form>
    )
}
