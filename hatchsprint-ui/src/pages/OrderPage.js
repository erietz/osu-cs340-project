export default function OrderPage() {
    return (
        <>
            <h1>Order Stuff Here</h1>

            <p>

        On this page we will have the functionality to add, edit, and delete orders

            </p>
            <p>
        <table id="orders" class="center">
            <thead>
                <tr>
                    <td>orderID</td>
                    <td>pretaxCost</td>
                    <td>tax</td>
                    <td>tip</td>
                    <td>totalCost</td>
                    <td>date</td>
                    <td>time</td>
                    <td>customerID</td>
                    <td>driverID</td>
                    <td>restaurantID</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
        </table>
            </p>
        </>
    )
}