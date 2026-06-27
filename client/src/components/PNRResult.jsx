function getStatusClass(status) {
  if (!status) return 'status-default'
  if (status.startsWith('CNF')) return 'status-cnf'
  if (status.startsWith('RAC')) return 'status-rac'
  if (status.startsWith('WL'))  return 'status-wl'
  return 'status-default'
}

function PNRResult({ data }) {
  return (
    <div className="ticket">

      <div className="ticket-header">
        <div className="train-name">{data.trainName}</div>
        <div className="train-number">Train #{data.trainNumber} · PNR {data.pnrNumber}</div>
      </div>

      <div className="ticket-body">
        <div className="journey-row">
          <div className="station">
            <div className="station-code">{data.sourceStation}</div>
            <div className="station-label">From</div>
          </div>
          <div className="journey-arrow">→</div>
          <div className="station">
            <div className="station-code">{data.destinationStation}</div>
            <div className="station-label">To</div>
          </div>
        </div>

        <div className="meta-row">
          <div className="meta-item">
            <div className="meta-label">Date</div>
            <div className="meta-value">{data.dateOfJourney?.split(' ')[0]}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Class</div>
            <div className="meta-value">{data.journeyClass}</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Chart</div>
            <div className="meta-value">{data.chartStatus}</div>
          </div>
        </div>
      </div>

      <div className="perforation">
        <div className="perf-circle" />
        <div className="perf-line" />
        <div className="perf-circle" />
      </div>

      <div className="passengers-title">Passengers</div>

      <div className="passenger-list">
        {data.passengerList.map((p) => (
          <div className="passenger-card" key={p.passengerSerialNumber}>
            <div className="pax-left">
              <div className="pax-number">Passenger {p.passengerSerialNumber}</div>
              <div className="pax-seat">{p.bookingCoachId} · Berth {p.bookingBerthNo}</div>
              <div className="pax-booking">Booked: {p.bookingStatus}</div>
            </div>
            <div className={`status-badge ${getStatusClass(p.currentStatus)}`}>
              {p.currentStatus}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default PNRResult