import SideBar from '../components/sidebar.js';
import CreateRestaurant from '../components/CreateRestaurantForm.js';

export default function RestaurantPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Restaurants</h1>

            <CreateRestaurant/>
            <br/>

            <table id="restaurants" class="center">
            <thead>
                <tr>
                    <td>restaurantID</td>
                    <td>restaurantName</td>
                    <td>streetAddressLine1</td>
                    <td>streetAddressLine2</td>
                    <td>city</td>
                    <td>state</td>
                    <td>zip</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tr>
                <td>1</td>
                <td>Abelardos</td>
                <td>123 Foo Street</td>
                <td>Suite 21</td>
                <td>Fargo</td>
                <td>North Dakota</td>
                <td>12345</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        </table>
        </>
    )
}
