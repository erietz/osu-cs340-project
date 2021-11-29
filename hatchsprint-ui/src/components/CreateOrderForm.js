import { useState } from 'react';
import AddAnotherProduct from './AddAnotherProduct.js';

export default function CreateOrder() {
    return (
        <div>
            <form>

                <label for="pretaxCost">Pre-Tax Cost</label>
                <input
                    type="text"
                    id="pretaxCost"
                    name="pretaxCost"
                    placeholder="Pre-Tax Cost"
                ></input>
                <br/>

                <label for="tax">Tax</label>
                <input
                    type="text"
                    id="tax"
                    name="tax"
                    placeholder="Tax"
                ></input>
                <br/>

                <label for="tip">Tip</label>
                <input
                    type="text"
                    id="tip"
                    name="tip"
                    placeholder="Tip"
                ></input>
                <br/>

                <label for="customerID">Customer ID</label>
                <input
                    type="text"
                    id="customerID"
                    name="customerID"
                    placeholder="Enter Customer ID"
                ></input>
                <br/>

                <label for="restaurantID">Restaurant ID </label>
                <input
                    type="text"
                    id="restaurantID"
                    name="restaurantID"
                    placeholder="Enter Restaurant ID"
                ></input>
                <br/>

                <label for="products">Products</label>
                <input
                    type="text"
                    id="products"
                    name="products"
                    placeholder="Enter Product ID"
                ></input>
                <br/>

                <div class = "container">
                    <AddAnotherProduct/>
                </div>

                <button>Create</button>
            </form>
        </div>
    )
}
