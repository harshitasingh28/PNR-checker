import { useState } from 'react'

function SearchForm({ onSearch }) {
  const [pnr, setPnr] = useState('')

  const handleSubmit = () => {
    if (pnr.length === 10) {
      onSearch(pnr)
    } else {
      alert('PNR must be exactly 10 digits')
    }
  }

  return (
    <div>
      <h2>PNR Status Checker</h2>
      <input
        type="text"
        placeholder="Enter 10-digit PNR"
        value={pnr}
        maxLength={10}
        onChange={(e) => setPnr(e.target.value)}
      />
      <button onClick={handleSubmit}>Check Status</button>
    </div>
  )
}

export default SearchForm