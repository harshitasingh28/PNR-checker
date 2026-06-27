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
      const res = await axios.get(`http://localhost:3000/api/pnr/${pnr}`)
      if (res.data.success) {
        setData(res.data.data)
      } else {
        setError(res.data.message)
      }
    } catch (err) {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <SearchForm onSearch={handleSearch} />

      {loading && <p>Fetching PNR status...</p>}
      {error   && <p style={{ color: 'red' }}>{error}</p>}
      {data    && <PNRResult data={data} />}
    </div>
  )
}

export default App