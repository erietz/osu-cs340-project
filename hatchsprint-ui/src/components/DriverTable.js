function DriverRow({ driver }) {
    return (
        <tr>
            <td>{driver.driverID}</td>
            <td>{driver.firstName}</td>
            <td>{driver.lastName}</td>
            <td>{driver.licenseNumber}</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    )
}

export default function DriverTable({ drivers }) {
    return (
        <table id="drivers" className="center">
            <thead>
                <tr>
                    <td>driverID</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>licenseNumber</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {drivers.map((driver, i) => <DriverRow driver={driver} key={i} /> )}
            </tbody>
        </table>
    )
}
