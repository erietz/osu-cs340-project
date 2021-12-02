import { MdDelete } from "react-icons/md";

function OrderProductsRow({ rowData }) {
    return (
        <tr>
            <td>{rowData.orderID}</td>
            <td>{rowData.productID}</td>
            <td>{rowData.productName}</td>
            <td><MdDelete/></td>
        </tr>
    )
}

export default function OrderProductsTable({ data }) {
    return (
        <table id="data" className="center">
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
