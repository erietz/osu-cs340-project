import { useState, useEffect } from "react";
import "../App.css";
import ProductDataList from "./ProductDataList.js";

export default function AddAnotherProduct({productIDs, setProductIDs, productData}) {

    const [counter, setCounter] = useState(0);

    const handleClick = (event) => {
        event.preventDefault();
        setCounter(counter + 1);
        console.log(counter);
    };

    return (
        <>
            <button id="AddAnother" onClick={handleClick}>Add Another Product</button>
            <br/>
            <br/>

            <div className="multicolumn">
                {Array.from(Array(counter).keys()).map((c, index) => (
                    <>
                        <label>{`Product ${c}`}</label>
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
