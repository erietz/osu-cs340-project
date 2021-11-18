function RestaurantRow({ restaurant }) {
    return (
        <tr>
            <td>{restaurant.restaurantID}</td>
            <td>{restaurant.restaurantName}</td>
            <td>{restaurant.streetAddress1}</td>
            <td>{restaurant.streetAddress2}</td>
            <td>{restaurant.city}</td>
            <td>{restaurant.state}</td>
            <td>{restaurant.zip}</td>
            <td>{restaurant.Edit}</td>
            <td>{restaurant.Delete}</td>
        </tr>
    )
}

export default function RestaurantTable({ restaurants }) {
    return (
        <table id="restaurant" class="center">
            <thead>
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
            </thead>
            <tbody>
                {restaurants.map((restaurant, i) => <RestaurantRow restaurant={restaurant} key={i} /> )}
            </tbody>
        </table>
    )
}
