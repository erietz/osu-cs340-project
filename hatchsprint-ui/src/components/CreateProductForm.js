export default function CreateProduct() {
    return (
        <form>

            <label for="name">Product Name</label>
            <input type="text" id="name" name="name"></input>
            <br/>

            <label for="available">Availability</label>
            <input type="text" id="available" name="available"></input>
            <br/>

            <label for="license">Price</label>
            <input type="text" id="price" name="price"></input>
            <br/>

            <label for="restid">Restaurant ID</label>
            <input type="text" id="restid" name="restid"></input>
            <br/>

            <label for="prodid">Product ID</label>
            <input type="text" id="prodid" name="prodid"></input>
            <br/>

        </form>
    )
}
