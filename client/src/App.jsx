import { useState } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import PNRResult from './components/PNRResult'

function App() {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  const handleSearch = async (pnr) => {
    setLoading(true)
    setError(null)
    setData(null)
    try {
      const res = await axios.get(`https://pnr-checker-server.onrender.com/api/pnr/${pnr}`)
      if (res.data.success) {
        setData(res.data.data)
      } else {
        setError(res.data.message)
      }
    } catch (_err) {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <div className="header">
        <h1>🚆 PNR Status</h1>
        <p>Indian Railways live ticket status</p>
      </div>

      <SearchForm onSearch={handleSearch} loading={loading} />

      {loading && (
        <div className="loading">
          <span>Fetching your ticket status...</span>
        </div>
      )}

      {error && <div className="error-box">⚠ {error}</div>}

      {data  && <PNRResult data={data} />}
    </div>
  )
}

export default App