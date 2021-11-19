import { MdEdit, MdDelete } from "react-icons/md";

function CustomerRow({ customer }) {
    return (
        <tr>
            <td>{customer.customerID}</td>
            <td>{customer.firstName}</td>
            <td>{customer.lastName}</td>
            <td>{customer.email}</td>
            <td>{customer.password}</td>
            <td>{customer.streetAddress1}</td>
            <td>{customer.streetAddress2}</td>
            <td>{customer.city}</td>
            <td>{customer.state}</td>
            <td>{customer.zip}</td>
            <td>{customer.phoneNumber}</td>
            <td><MdEdit/></td>
            <td><MdDelete/></td>
        </tr>
    )
}

export default function CustomerTable({ customers }) {
    return (
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
            <tbody>
                {customers.map((customer, i) => <CustomerRow customer={customer} key={i} /> )}
            </tbody>
        </table>
    )
}
