function DriverOrdersRow( {driverOrder} ) {
    return (
        <tr>
            <td>{driverOrder.orderID}</td>
            <td>{driverOrder.driverID}</td>
            <td>{driverOrder.firstName}</td>
            <td>{driverOrder.lastName}</td>
        </tr>
    )
}

export default function DriverOrdersTable({data}) {
    return (
        <table id="driverorders" className="center">
            <thead>
                <tr>
                    <td>Order ID</td>
                    <td>Driver ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                </tr>
            </thead>
            <tbody>
                {data.map((dat, i) => <DriverOrdersRow driverOrder={dat} key={i} /> )}
            </tbody>
        </table>
    )
}
