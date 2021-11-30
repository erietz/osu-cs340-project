import { MdEdit, MdDelete } from "react-icons/md";

function ProductRow({ product, onDelete }) {
    return (
        <tr>
            <td>{ product.productID }</td>
            <td>{ product.productName }</td>
            <td>{ product.availability }</td>
            <td>{ product.price }</td>
            <td>{ product.restaurantID }</td>
            <td><MdEdit/></td>
            <td><MdDelete onClick={() => onDelete(product.productID)} /></td>
        </tr>
    )
}

export default function ProductTable({ products, onDelete }) {
    return (
        <table id="products" className="center">
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
                {products.map((product, i) => <ProductRow product={product} onDelete = {onDelete} key={i} /> )}
            </tbody>
        </table>
    )
}
