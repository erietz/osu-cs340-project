export default function DriverFormInputs({ setStateFunctions, defaultValues }) {
    const {setFirstName, setLastName, setLicenseNumber} = setStateFunctions;

    const defaultFirstName = defaultValues.firstName !== undefined ? defaultValues.firstName : "";
    const defaultLastName = defaultValues.lastName !== undefined ? defaultValues.lastName : "";
    const defaultLicenseNumber = defaultValues.licenseNumber !== undefined ? defaultValues.licenseNumber : "";

    return (
        <>
            <label htmlFor="firstName">First Name</label>
            <input
                required
                type="text"
                id="firstName"
                name="firstName"
                defaultValue={defaultFirstName}
                placeholder="First Name"
                onChange={e => setFirstName(e.target.value)}
            />
            <br/>

            <label htmlFor="lastName">Last Name</label>
            <input
                required
                type="text"
                id="lastName"
                name="lastName"
                defaultValue={defaultLastName}
                placeholder="Last Name"
                onChange={e => setLastName(e.target.value)}
            />
            <br/>

            <label htmlFor="licenseNumber">License Number</label>
            <input
                required
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                defaultValue={defaultLicenseNumber}
                placeholder="License Number"
                onChange={e => setLicenseNumber(e.target.value)}
            />
        </>
    )
}
