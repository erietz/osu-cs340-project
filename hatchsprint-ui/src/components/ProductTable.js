function ProductRow({ product }) {
    return (
        <tr>
            <td>{ product.productID }</td>
            <td>{ product.productName }</td>
            <td>{ product.availability }</td>
            <td>{ product.price }</td>
            <td>{ product.restaurantID }</td>
            <td>Edit</td>
            <td>Delete</td>
        </tr>
    )
}

export default function ProductTable({ products }) {
    return (
        <table id="products" class="center">
            <thead>
                <tr>
                    <td>productID</td>
                    <td>name</td>
                    <td>availability</td>
                    <td>price</td>
                    <td>restaurantID</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {products.map((product, i) => <ProductRow product={product} key={i} /> )}
            </tbody>
        </table>
    )
}
