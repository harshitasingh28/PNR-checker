

function PNRResult({ data }) {
  return (
    <div>
      <h3>Train: {data.trainNumber} - {data.trainName}</h3>
      <p>From: {data.sourceStation} → To: {data.destinationStation}</p>
      <p>Date: {data.dateOfJourney}</p>
      <p>Class: {data.journeyClass}</p>
      <p>Chart: {data.chartStatus}</p>

      <h4>Passengers</h4>
      {data.passengerList.map((p) => (
        <div key={p.passengerSerialNumber}>
          <p>
            Passenger: {p.passengerSerialNumber}
          </p>

          <p>
            Booking Status: {p.bookingStatus}
          </p>

          <p>
            Current Status: {p.currentStatus}
          </p>

          <p>
            Coach: {p.bookingCoachId}
          </p>

          <p>
            Berth: {p.bookingBerthNo}
          </p>
          <hr />
          
        </div>
      ))}
    </div>
  )
}

export default PNRResult;