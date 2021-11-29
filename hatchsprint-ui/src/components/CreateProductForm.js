import { useState } from 'react';

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [available, setAvailable] = useState('');
    const [price, setPrice] = useState('');
    const [restid, setRestid] = useState('');

    const create = async () => {
        const newProduct = {name, available, price, restid};
        fetch('/product', {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // window.location.reload(false);
    }

    return (
        <>
            <label for="name">Product Name</label>
            <input type="text" id="name" name="name" placeholder = "Name" onChange={e => setName(e.target.value)}></input>
            <br/>

            <label for="available">Availability</label>
            <input type="text" id="available" name="available" placeholder = "Availability" onChange={e => setAvailable(e.target.value)}></input>
            <br/>

            <label for="price">Price</label>
            <input type="text" id="price" name="price" placeholder = "Price" onChange={e => setPrice(e.target.value)}></input>
            <br/>

            <label for="restid">Restaurant ID</label>
            <input type="text" id="restid" name="restid" placeholder = "Restaurant ID" onChange={e => setRestid(e.target.value)}></input>
            <br/>

            <button onClick={create}>Create</button>
        </>
    )
}
