export default function CustomerDataList({customerData}) {
    return (
        <>
            {customerData.map( (cust, i) => (
                    <option key={i} value={cust.customerID}>
                        {cust.customerID + " " + cust.firstName + " " + cust.lastName}
                    </option>
                ))
            }
        </>
)}

