export default function CreateOrder() {
    return (
        <form>

            <label for="pretaxCost">Pre-Tax Cost</label>
            <input type="text" id="pretaxCost" name="pretaxCost" placeholder = "Pre-Tax Cost"></input>
            <br/>

            <label for="tax">Tax</label>
            <input type="text" id="tax" name="tax" placeholder = "Tax"></input>
            <br/>

            <label for="tip">Tip</label>
            <input type="text" id="tip" name="tip" placeholder = "Tip"></input>
            <br/>

            <label for="customerID">Customer ID</label>
            <input type="text" id="customerID" name="customerID"></input>
            <br/>

            <label for="restaurantID">Restaurant ID </label>
            <input type="text" id="restaurantID" name="restaurantID"></input>
            <br/>
            <button>Create</button>
        </form>
    )
}
