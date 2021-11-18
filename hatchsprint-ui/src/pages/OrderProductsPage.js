import SideBar from '../components/Sidebar.js';
import SearchOrderProducts from '../components/SearchOrderProducts.js';

export default function OrderProductsPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>View OrderProducts</h1>
            <SearchOrderProducts/>
            <br/>
            <p>
        <table id="orders" class="center">
            <thead>
                <tr>
                    <td>Order ID</td>
                    <td>Product ID</td>
                    <td>Product Name</td>
                    <td>Remove Product</td>
                </tr>
            </thead>
                <tr>
                    <td>123</td>
                    <td>456</td>
                    <td>Spaghetti</td>
                    <td>Remove</td>
                </tr>
                <tr>
                    <td></td>
                    <td>789</td>
                    <td>Pizza</td>
                    <td>Remove</td>
                </tr>
                <tr>
                    <td></td>
                    <td>012</td>
                    <td>Sushi</td>
                    <td>Remove</td>
                </tr>
        </table>
            </p>
        </>
    )
}
