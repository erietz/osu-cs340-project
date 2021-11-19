import { useState, useEffect } from 'react';
import SideBar from '../components/Sidebar.js';
import CreateProduct from '../components/CreateProductForm.js';
import ProductTable from '../components/ProductTable.js';

export default function ProductPage() {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch("/products")
            .then(data => data.json())
            .then(json => setProducts(json))
            .catch(err => console.error(err));
    }, [])
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Products</h1>

            <CreateProduct/>
            <div className="table-container">
                <ProductTable products={products}/>
            </div>
        </>
    )
}
