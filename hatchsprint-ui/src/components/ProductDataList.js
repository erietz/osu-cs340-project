export default function ProductDataList({productData, id}) {
    return (
        <datalist id={id}>
            {productData.map( (prod, i) => (
                    <option key={i} value={prod.restaurantID}>
                        {prod.productID + " " + prod.productName}
                    </option>
                ))
            }
        </datalist>
)}
