export default function CreateRestaurant() {
    return (
        <form>

            <label for="name">Restaurant Name</label>
            <input type="text" id="name" name="name"></input>
            <br/>

            <label for="streetAddress1">Street Address 1</label>
            <input type="text" id="streetAddress1" name="streetAddress1"></input>
            <br/>

            <label for="streetAddress2">Street Address 2</label>
            <input type="text" id="streetAddress2" name="streetAddress2"></input>
            <br/>

            <label for="city">city</label>
            <input type="text" id="city" name="city"></input>
            <br/>

            <label for="state">state</label>
            <input type="text" id="state" name="state"></input>
            <br/>

            <label for="zip">zip</label>
            <input type="text" id="zip" name="zip"></input>
            <br/>

        </form>
    )
}
