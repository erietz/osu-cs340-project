export default function OrderDataList({ orderData}) {
    return (
        <>
            {orderData.map( (order, i) => (
                    <option key={i} value={order.orderID}>
                        {`ID: ${order.orderID} Date:  ${order.date.split('T')[0]} Time: ${order.time}`}
                    </option>
                ))
            }
        </>
    )
};
