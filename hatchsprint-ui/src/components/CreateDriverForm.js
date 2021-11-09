export default function CreateDriver() {
    return (
        <form>

            <label for="fname">First Name</label>
            <input type="text" id="fname" name="fname" placeholder = "First Name"></input>
            <br/>

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lname" placeholder = "Last Name"></input>
            <br/>

            <label for="license">License Number</label>
            <input type="text" id="license" name="license" placeholder = "License Number"></input>
            <br/>
            <button>Create</button>
        </form>
    )
}
