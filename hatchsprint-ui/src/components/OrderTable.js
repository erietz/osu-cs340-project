import { MdEdit, MdDelete } from "react-icons/md";

function OrderRow({ order, onDelete }) {
    return (
        <tr>
            <td>{ order.orderID }</td>
            <td>{ order.pretaxCost }</td>
            <td>{ order.tax }</td>
            <td>{ order.tip }</td>
            <td>{ order.totalCost }</td>
            <td>{ order.date }</td>
            <td>{ order.time }</td>
            <td>{ order.customerID }</td>
            <td>{ order.driverID }</td>
            <td>{ order.restaurantID }</td>
            <td><MdEdit/></td>
            <td><MdDelete onClick={() => onDelete(order.orderID)}/></td>
        </tr>
    )
}

export default function OrderTable({ orders, onDelete }) {
    return (
        <table id="orders" className="center">
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
            <tbody>
                {orders.map((order, i) => <OrderRow order={order} onDelete = {onDelete} key={i} /> )}
            </tbody>
        </table>
    )
}
