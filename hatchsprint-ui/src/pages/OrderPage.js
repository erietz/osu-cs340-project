import SideBar from '../components/sidebar.js';
import OrderForm from '../components/CreateOrderForm.js';
import SearchByOrder from '../components/SearchOrders.js';

export default function OrderPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Orders</h1>

            <OrderForm/>
            <p></p>
            

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
                <tr>
                    <td>1</td>
                    <td>$39</td>
                    <td>$4.00</td>
                    <td>$5.00</td>
                    <td>$48</td>
                    <td>2021-10-28</td>
                    <td>13:34</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
        </table>
            </p>
        </>
    )
}
