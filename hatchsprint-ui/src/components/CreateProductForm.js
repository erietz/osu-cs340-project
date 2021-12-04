import { useState, useEffect } from 'react';
import RestaurantDataList from '../components/RestaurantDataList.js';

export default function CreateProduct() {
    const [productName, setProductName] = useState(null);
    const [availability, setAvailability] = useState(null);
    const [price, setPrice] = useState(null);
    const [restaurantID, setRestaurantID] = useState(null);
    const [restaurantData, setRestaurantData] = useState([]);

    const create = async (event) => {
        const newProduct = {productName, availability, price, restaurantID};

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Product Created, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            alert(`Failed to create Product, status code = ${response.status}`);
            console.error(response.error);
        }
    }

    useEffect( () => {
        fetch("/api/restaurants")
            .then(data => data.json())
            .then(json => setRestaurantData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <form onSubmit={create}>
            <label htmlFor="productName">Product Name</label>
            <input
                required
                type="text"
                id="productName"
                name="productName"
                placeholder="Name"
                onChange={e => setProductName(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="availability">Availability</label>
            <select
                required
                name="availability"
                onChange={e => setAvailability(e.target.value)}
            >
                <option label=""/>
                <option value="0">No</option>
                <option value="1">Yes</option>
            </select>
            <br/>

            <label htmlFor="price">Price</label>
            <input
                required
                type="number"
                step="0.01"
                id="price"
                name="price"
                placeholder="Price"
                onChange={e => setPrice(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="restaurantID">Restaurant ID</label>
            <select
                required
                type="text"
                placeholder="Restaurant ID"
                onChange={e => setRestaurantID(e.target.value)}
            >
                <option label=""/>
                <RestaurantDataList restaurantData={restaurantData}/>
            </select>
            <br/>

            <button>Create</button>
        </form>
    )
}
