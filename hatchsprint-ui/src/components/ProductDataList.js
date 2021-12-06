export default function ProductDataList({productData}) {
    return (
        <>
            {productData.map( (rest, i) => (
                    <option key={i} value={rest.productID}>
                        {rest.productID + ": " + rest.productName}
                    </option>
                ))
            }
        </>
)}

