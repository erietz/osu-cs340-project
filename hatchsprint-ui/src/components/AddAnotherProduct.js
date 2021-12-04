import { useState, useEffect } from "react";
import "../App.css";
import ProductDataList from "./ProductDataList.js";

export default function AddAnotherProduct({productIDs, setProductIDs, restaurantID, productData, setProductData}) {
    if (!restaurantID) {
        alert("Please set a restaurantID before trying to add a product");
        return;
    }

    const [counter, setCounter] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        setCounter(counter + 1);
        console.log(counter);
    };

    useEffect( () => {
        fetch(`/api/products?restaurantID=${restaurantID}`)
            .then(data => data.json())
            .then(json => setProductData(json))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <button id="AddAnother" onClick={handleClick}>Add Another Product</button>
            <br/>
            <br/>

            <div className="multicolumn">
                {Array.from(Array(counter)).map((c, index) => (
                    <>
                        <label> </label>
                        <input
                            key={index}
                            type="text"
                            name={`productIDs[][${index}]`}
                            onChange={e => setProductIDs([...productIDs, e.target.value])}
                            placeholder="Enter Product ID"
                            list="productIDs"
                        ></input>
                        <ProductDataList productData={productData} id="productIDs"/>
                        <br/>
                        </>
                ))}
            </div>

            </>
    );
}
