import SideBar from '../components/sidebar.js';
import CreateDriver from '../components/CreateDriverForm.js';

export default function DriverPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Driver Stuff Here</h1>

            <CreateDriver/>

            <p>
        <table id="drivers" class="center">
            <thead>
                <tr>
                    <td>driverID</td>
                    <td>firstName</td>
                    <td>lastName</td>
                    <td>licenseNumber</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
                <tr>
                    <td>1</td>
                    <td>Ethan</td>
                    <td>Rietz</td>
                    <td>123456789</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
        </table>
            </p>
        </>
    )
}
