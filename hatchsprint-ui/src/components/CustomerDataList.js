export default function CustomerDataList({customerData, id}) {
    return (
        <datalist id={id}>
            {customerData.map( (cust, i) => (
                    <option key={i} value={cust.customerID}>
                        {cust.customerID + " " + cust.firstName + " " + cust.lastName}
                    </option>
                ))
            }
        </datalist>
)}

