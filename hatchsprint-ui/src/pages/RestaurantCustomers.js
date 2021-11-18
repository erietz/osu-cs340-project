import SideBar from '../components/Sidebar.js';
import CustomerForm from '../components/CreateCustomerForm.js';
import SearchRestaurantCustomers from '../components/SearchRestaurantCustomers.js';

export default function RestaurantCustomersPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>RestaurantCustomers</h1>
            <SearchRestaurantCustomers/>
            <br/>
            <p/>
            <table id="customers" class="center">
            <thead>
                <tr>
                    <td>restaurantID</td>
                    <td>Restaurant Name</td>
                    <td>customerID</td>
                    <td>Customer Name</td>
                    <td>Remove Customer</td>
                </tr>
            </thead>
                <tr>
                    <td>1</td>
                    <td>Sal's</td>
                    <td>2</td>
                    <td>Joe Smith</td>
                    <td>Remove</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>3</td>
                    <td>Jane Adams</td>
                    <td>Remove</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>4</td>
                    <td>Jill Jones</td>
                    <td>Remove</td>
                </tr>
        </table>
        </>
    )
}
