import { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar.js';
import CreateProduct from '../components/CreateProductForm.js';
import ProductTable from '../components/ProductTable.js';

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("/api/products")
            .then(data => data.json())
            .then(json => setProducts(json))
            .catch(err => console.error(err));
    }, [])

    const onDelete = async _id => {
        const productID = {'productID': _id}
        const response = await fetch(`/api/products`, { 
            method: 'DELETE',
            body: JSON.stringify(productID),
            headers: {
                'Content-Type': 'application/json'
            }
         });
        if (response.status === 200) {
            fetch("/api/products")
            .then(data => data.json())
            .then(json => setProducts(json))
            .catch(err => console.error(err));
        } else {
            console.error(`Failed to delete product with id = ${_id}, status code = ${response.status}`);
        }
    };

    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Products</h1>

            <CreateProduct/>
            <div className="table-container">
                <ProductTable products={products} onDelete={onDelete}/>
            </div>
        </>
    )
}
