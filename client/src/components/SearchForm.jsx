import { useState } from 'react'

function SearchForm({ onSearch, loading }) {
  const [pnr, setPnr] = useState('')

  const handleSubmit = () => {
    if (pnr.length === 10) {
      onSearch(pnr)
    } else {
      alert('PNR must be exactly 10 digits')
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="search-box">
      <div className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Enter 10-digit PNR"
          value={pnr}
          maxLength={10}
          onChange={(e) => setPnr(e.target.value.replace(/\D/g, ''))}
          onKeyDown={handleKey}
        />
        <button
          className="search-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Check Status'}
        </button>
      </div>
    </div>
  )
}

export default SearchForm