import { MdEdit, MdDelete } from "react-icons/md";

function DriverRow({ driver, onDelete, onEdit }) {
    return (
        <tr>
            <td>{driver.driverID}</td>
            <td>{driver.firstName}</td>
            <td>{driver.lastName}</td>
            <td>{driver.licenseNumber}</td>
            <td><MdEdit onClick={() => onEdit(driver)}/></td>
            <td><MdDelete onClick={() => onDelete(driver.driverID)} /></td>
        </tr>
    )
}

export default function DriverTable({ drivers, onDelete, onEdit }) {
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
                {drivers.map((driver, i) => <DriverRow driver={driver} onDelete = {onDelete} onEdit={onEdit} key={i} /> )}
            </tbody>
        </table>
    )
}
