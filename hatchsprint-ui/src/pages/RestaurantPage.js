export default function RestaurantPage() {
    return (
        <>
            <h1>Restaurant Stuff Here</h1>

            <p>

        On this page we could functionality to create, delete, and update
        resaurants. It would also make sense to have a link to a page from here
        manage the products that belong to a restaurant. Or maybe this should
        be on the home page as well?

            </p>
            <table id="restaurants" class="center">
            <thead>
                <tr>
                    <td>restaurantID</td>
                    <td>restaurantName</td>
                    <td>streetAddressLine1</td>
                    <td>streetAddressLine2</td>
                    <td>city</td>
                    <td>state</td>
                    <td>zip</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
        </table>
        </>
    )
}
