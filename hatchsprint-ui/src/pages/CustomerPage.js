import SideBar from '../components/sidebar.js';

export default function CustomerPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Customer Stuff Here</h1>

            <p>
        On this page we could have links to create, delete, and update
        customers. Additionally we could add some features to view orders for a
        customer.
            </p>
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
        </table>
        </>
    )
}
