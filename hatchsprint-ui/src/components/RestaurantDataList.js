export default function RestaurantDataList({restaurantData}) {
    return (
        <>
            {restaurantData.map( (rest, i) => (
                    <option key={i} value={rest.restaurantID}>
                        {rest.restaurantID + ": " + rest.restaurantName + " " + rest.streetAddress1}
                    </option>
                ))
            }
        </>
)}
