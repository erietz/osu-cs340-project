export default function CreateProduct() {
    return (
        <form>

            <label for="name">Product Name</label>
            <input type="text" id="name" name="name" placeholder = "Name"></input>
            <br/>

            <label for="available">Availability</label>
            <input type="text" id="available" name="available" placeholder = "Availability"></input>
            <br/>

            <label for="license">Price</label>
            <input type="text" id="price" name="price" placeholder = "Price"></input>
            <br/>

            <label for="restid">Restaurant ID</label>
            <input type="text" id="restid" name="restid" placeholder = "Restaurant ID"></input>
            <br/>
            
            <button>Create</button>
        </form>
    )
}
