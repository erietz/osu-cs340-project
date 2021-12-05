export default function DriverFormInputs( {states } ) {
    const {setFname, setLname, setLicense} = states;
    return (
        <>
            <label htmlFor="fname">First Name</label>
            <input
                required
                type="text"
                id="fname"
                name="fname"
                placeholder="First Name"
                onChange={e => setFname(e.target.value)}
            />
            <br/>

            <label htmlFor="lname">Last Name</label>
            <input
                required
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                onChange={e => setLname(e.target.value)}
            />
            <br/>

            <label htmlFor="license">License Number</label>
            <input
                required
                type="text"
                id="license"
                name="license"
                placeholder="License Number"
                onChange={e => setLicense(e.target.value)}
            />
        </>
    )
}
