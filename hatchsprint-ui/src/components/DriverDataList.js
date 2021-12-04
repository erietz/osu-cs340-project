export default function DriverDataList({ driverData }) {
    return (
        <>
            {driverData.map( (driv, i) => (
                    <option key={i} value={driv.driverID}>
                        {driv.driverID + " " + driv.firstName + " " + driv.lastName}
                    </option>
                ))
            }
        </>
    )
}
