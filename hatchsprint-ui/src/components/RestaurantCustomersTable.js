function RestaurantCustomersRow({ rowData }) {
    return (
        <tr>
            <td>{rowData.restaurantID}</td>
            <td>{rowData.restaurantName}</td>
            <td>{rowData.customerID}</td>
            <td>{rowData.firstName} {rowData.lastName}</td>
            <td>Remove Customer</td>
        </tr>
    )
}

export default function RestaurantCustomersTable({ data }) {
    return (
        <table id="data" className="center">
            <thead>
                <tr>
                    <td>restaurantID</td>
                    <td>Restaurant Name</td>
                    <td>customerID</td>
                    <td>Customer Name</td>
                    <td>Remove Customer</td>
                </tr>
            </thead>
            <tbody>
                {data.map((foo, i) => <RestaurantCustomersRow rowData={foo} key={i} /> )}
            </tbody>
        </table>
    )
}
