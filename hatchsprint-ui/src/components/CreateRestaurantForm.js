export default function CreateRestaurant() {
    return (
        <form>

            <label for="name">Restaurant Name</label>
            <input type="text" id="name" name="name" placeholder = "Name"></input>
            <br/>

            <label for="streetAddress1">Street Address 1</label>
            <input type="text" id="streetAddress1" name="streetAddress1" placeholder = "Address Line 1"></input>
            <br/>

            <label for="streetAddress2">Street Address 2</label>
            <input type="text" id="streetAddress2" name="streetAddress2" placeholder = "Address Line 2"></input>
            <br/>

            <label for="city">city</label>
            <input type="text" id="city" name="city" placeholder = "City"></input>
            <br/>

            <label for="state">state</label>
            <input type="text" id="state" name="state" placeholder = "State"></input>
            <br/>

            <label for="zip">zip</label>
            <input type="text" id="zip" name="zip" placeholder = "Zip"></input>
            <br/>
            <label for="customers">Customers</label>
            <input type="text" id="customers" name="customers" placeholder = "Customer ID"></input>
            <br/>
            <button>Create</button>
        </form>
    )
}
