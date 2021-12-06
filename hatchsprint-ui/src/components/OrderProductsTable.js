import { MdDelete } from "react-icons/md";

function OrderProductsRow({ rowData, onDelete }) {
    return (
        <tr>
            <td>{rowData.orderID}</td>
            <td>{rowData.productID}</td>
            <td>{rowData.productName}</td>
            <td><MdDelete onClick={() => onDelete(rowData.orderID, rowData.productID)}/></td>
        </tr>
    )
}


export default function OrderProductsTable({ data, onDelete }) {
    return (
        <table id="data" className="center">
            <thead>
                <tr>
                    <td>Order ID</td>
                    <td>Product ID</td>
                    <td>Product Name</td>
                    <td>Remove Product</td>
                </tr>
            </thead>
            <tbody>
                {data.map((foo, i) => <OrderProductsRow rowData={foo} onDelete={onDelete} key={i} /> )}
            </tbody>
        </table>
    )
}
