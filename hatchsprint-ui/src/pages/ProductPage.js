import SideBar from '../components/sidebar.js';

export default function ProductPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Product Stuff Here</h1>

            <p>

        On this page we will have the functionality to add, edit, and delete products
        </p>
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
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
            </tr>
            <tr>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
                <td> test here </td>
            </tr>
        </table>
            </p>
        </>
    )
}
