import SideBar from '../components/sidebar.js';
import CustomerForm from '../components/CreateCustomerForm.js';

export default function CustomerPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Manage Customers</h1>

            <CustomerForm/>

            <table id="customers" class="center">
            <thead>
                <tr>
                    <td>customerID</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>email</td>
                    <td>password</td>
                    <td>streetAddressLine1</td>
                    <td>streetAddressLine2</td>
                    <td>city</td>
                    <td>state</td>
                    <td>zip</td>
                    <td>phoneNumber</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
                <tr>
                    <td>1</td>
                    <td>Ethan</td>
                    <td>Rietz</td>
                    <td>ethan@rietz.com</td>
                    <td>er</td>
                    <td>123 Foo Street</td>
                    <td></td>
                    <td>Bar</td>
                    <td>AZ</td>
                    <td>64564</td>
                    <td>478-123-4234</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
        </table>
        </>
    )
}
