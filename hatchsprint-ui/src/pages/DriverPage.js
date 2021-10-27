import SideBar from '../components/sidebar.js';

export default function DriverPage() {
    return (
        <>
            <SideBar/>
            <br/>

            <h1>Driver Stuff Here</h1>

            <p>

        This page will be for viewing and managing drivers.

            </p>

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
        </table>
            </p>
        </>
    )
}
