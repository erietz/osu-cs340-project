import { MdEdit, MdDelete } from "react-icons/md";
import DriverPage from "../pages/DriverPage";

function DriverRow({ driver, onDelete }) {
    return (
        <tr>
            <td>{driver.driverID}</td>
            <td>{driver.firstName}</td>
            <td>{driver.lastName}</td>
            <td>{driver.licenseNumber}</td>
            <td><MdEdit/></td>
            <td><MdDelete onClick={() => onDelete(driver.driverID)} /></td>
        </tr>
    )
}

export default function DriverTable({ drivers, onDelete }) {
    return (
        <table id="drivers" className="center">
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
            <tbody>
                {drivers.map((driver, i) => <DriverRow driver={driver} onDelete = {onDelete} key={i} /> )}
            </tbody>
        </table>
    )
}
