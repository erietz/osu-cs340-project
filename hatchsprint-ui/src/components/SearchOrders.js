export default function SearchByOrder() {
    return (
        <div>
            <label for="customer">Search By Customer Name</label>
            <input type="text" id="customer" name="customer"></input>
            <button>Search</button>
            <br/>

            <label for="search">Search By Restaurant Name</label>
            <input type="text" id="restaurant" name="restaurant"></input>
            <button>Search</button>
            <br/>
        </div>
    )
}
