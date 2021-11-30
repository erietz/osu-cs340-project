export default function SearchOrderProducts() {
    return (
        <form method="GET">
            <label htmlFor="orderID">Search OrderProducts</label>
            <input
                type="text"
                id="orderID"
                name="orderID"
                placeholder="Enter order ID"
            ></input>
            <button>Search</button>
            <br/>
        </form>
    )
}
