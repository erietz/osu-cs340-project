export default function CreateCustomer() {
    return (
        <form>

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder = "First Name"></input>
            <br/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder = "Last Name"></input>
            <br/>

            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder = "Email"></input>
            <br/>

            <label for="password">Password</label>
            <input type="text" id="password" name="password" placeholder = "Password"></input>
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
            <input type="text" id="zip" name="zip" placeholder = "Zip Code"></input>
            <br/>

            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder = "Phone Number"></input>
            <br/>
            <p/>
            <button>Create</button>
        </form>
    )
}
