import RestaurantDataList from '../components/RestaurantDataList.js';

export default function SearchRestaurantCustomers( {restaurantData}) {
    return (
        <div>
            <label htmlFor="restaurantcustomers">Search RestaurantCustomers</label>
            <input
                type="text"
                placeholder="Enter restaurant ID"
                list="restaurantIDs"
            ></input>
            <RestaurantDataList restaurantData={restaurantData} id="restaurantIDs"/>
            <button>Search</button>
            <br/>
        </div>
    )
}
