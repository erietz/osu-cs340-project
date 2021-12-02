export default function OrderDataList({ orderData, id }) {
    return (
        <datalist id={id}>
            {orderData.map( (order, i) => (
                    <option key={i} value={order.orderID}>
                        {order.orderID + " Date: " + order.date + " Time: " + order.time}
                    </option>
                ))
            }
        </datalist>
    )
};
