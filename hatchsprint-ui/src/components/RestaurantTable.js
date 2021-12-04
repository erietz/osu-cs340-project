import { MdDelete } from "react-icons/md";

function RestaurantRow({ restaurant, onDelete }) {
    return (
        <tr>
            <td>{restaurant.restaurantID}</td>
            <td>{restaurant.restaurantName}</td>
            <td>{restaurant.streetAddress1}</td>
            <td>{restaurant.streetAddress2}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.state}</td>
            <td>{restaurant.zip}</td>
            <td><MdDelete onClick={() => onDelete(restaurant.restaurantID)}/></td>
        </tr>
    )
}

export default function RestaurantTable({ restaurants, onDelete }) {
    return (
        <table id="restaurant" className="center">
            <thead>
                <tr>
                    <td>restaurantID</td>
                    <td>Restaurant Name</td>
                    <td>Street Address1</td>
                    <td>Street Address2</td>
                    <td>City</td>
                    <td>State</td>
                    <td>Zip</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant, i) => <RestaurantRow restaurant={restaurant} onDelete = {onDelete} key={i} /> )}
            </tbody>
        </table>
    )
}
