import { useState, useEffect } from 'react';
import RestaurantDataList from '../components/RestaurantDataList.js';

export default function CreateProduct() {
    const [productName, setProductName] = useState('');
    const [availability, setAvailability] = useState('');
    const [price, setPrice] = useState('');
    const [restaurantID, setRestaurantID] = useState('');
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
                type="text"
                id="productName"
                name="productName"
                placeholder="Name"
                onChange={e => setProductName(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="availability">Availability</label>
            <input
                type="text"
                id="availability"
                name="availability"
                placeholder="Availability"
                onChange={e => setAvailability(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="price">Price</label>
            <input
                type="text"
                id="price"
                name="price"
                placeholder="Price"
                onChange={e => setPrice(e.target.value)}
            ></input>
            <br/>

            <label htmlFor="restaurantID">Restaurant ID</label>
            <input
                type="text"
                placeholder="Restaurant ID"
                onChange={e => setRestaurantID(e.target.value)}
                list="restaurantIDs"
            ></input>
            <RestaurantDataList restaurantData={restaurantData} id="restaurantIDs"/>
            <br/>

            <button onClick={create}>Create</button>
        </form>
    )
}
