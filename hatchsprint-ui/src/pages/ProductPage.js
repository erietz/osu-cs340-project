import SideBar from '../components/sidebar.js';
import CreateProduct from '../components/CreateProductForm.js';

export default function ProductPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Products</h1>

            <CreateProduct/>

        <p>
        <table id="products" class="center">
            <thead>
                <tr>
                    <td>productID</td>
                    <td>name</td>
                    <td>availability</td>
                    <td>price</td>
                    <td>restaurantID</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
                <tr>
                    <td>1</td>
                    <td>Arizona Burrito</td>
                    <td>yes</td>
                    <td>$8.98</td>
                    <td>1</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
        </table>
            </p>
        </>
    )
}
