export default function DriverDataList({ driverData, id }) {
    return (
        <datalist id={id}>
            {driverData.map( (driv, i) => (
                    <option key={i} value={driv.driverID}>
                        {driv.driverID + " " + driv.firstName + " " + driv.lastName}
                    </option>
                ))
            }
        </datalist>
    )
}
