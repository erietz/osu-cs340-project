import { useState, useEffect } from 'react';
import OrderDataList from '../components/OrderDataList.js';
import ProductDataList from '../components/ProductDataList.js';

export default function AddProductToOrder() {
    const [orderID, setOrderID] = useState(null);
    const [productID, setproductID] = useState([]);
    const [orderData, setOrderData] = useState([]);
    const [productData, setProductData] = useState([]);

    useEffect( () => {
        fetch("/api/orders")
            .then(data => data.json())
            .then(json => setOrderData(json))
            .catch(error => console.error(error));
    }, []);

    const handleSetOrder = async (event) => {
        setOrderID(event.target.value)
        fetch(`/api/orders/restaurantproducts?orderID=${event.target.value}`)
            .then(data => data.json())
            .then(json => setProductData(json))
            .catch(error => console.error(error));
        
    }


    const create = async (event) => {
        const newProduct = {orderID, productID}

        event.preventDefault()  // do not reload the page
        const response = await fetch('/api/orderproducts', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 201) {
            alert(`Product added, status code = ${response.status}`);
            window.location.reload(false);
        } else {
            alert(`Failed to add product, status code = ${response.status}`);
            console.error(response.error);
        }
    }

    return (
        <form onSubmit={create}>
            <div className="multicolumn">
            <label htmlFor="orderID">Order ID </label>
                <select
                    required
                    name="orderID"
                    placeholder="Enter Order ID"
                    onChange={e => handleSetOrder(e)}
                >
                    <option label=""/>
                    <OrderDataList orderData={orderData}/>
                </select>
                <br/>

                <label htmlFor="productID">Product ID </label>
                <select
                    required
                    name="productID"
                    placeholder="Enter Product ID"
                    onChange={e => setproductID(e.target.value)}
                >
                    <option label=""/>
                    <ProductDataList productData={productData}/>
                </select>
                <br/>
                <br/>

                </div>

                <br/>
            <button>Create</button>
        </form>
    )
}
