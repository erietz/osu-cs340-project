function OrderProductsRow({ rowData }) {
    return (
        <tr>
            <td>{rowData.orderID}</td>
            <td>{rowData.productID}</td>
            <td>{rowData.productName}</td>
            <td>Remove Customer</td>
        </tr>
    )
}

export default function OrderProductsTable({ data }) {
    return (
        <table id="data" class="center">
            <thead>
                <tr>
                    <td>Order ID</td>
                    <td>Product ID</td>
                    <td>Product Name</td>
                    <td>Remove Customer</td>
                </tr>
            </thead>
            <tbody>
                {data.map((foo, i) => <OrderProductsRow rowData={foo} key={i} /> )}
            </tbody>
        </table>
    )
}
