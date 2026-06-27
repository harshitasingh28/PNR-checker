import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
app.use(cors())
app.use(express.json())

const API_KEY = '5b27b297aamshfdbb598e6a3e5f4p16763ajsnf37d2ce2de09'

app.get('/api/pnr/:number', async (req, res) => {
  const { number } = req.params

  if (!/^\d{10}$/.test(number)) {
    return res.status(400).json({
      error: 'PNR must be exactly 10 digits'
    })
  }

  try {
    const response = await axios.get(
      `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${number}`,
      {
        headers: {
          'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com',
          'x-rapidapi-key': API_KEY
        }
      }
    )
    res.json(response.data)

  } catch (error) {                               // ← your existing catch
    console.error(error.response?.data || error.message)
    res.status(500).json({
      error: 'Failed to fetch PNR status',
      detail: error.response?.data || error.message  // ← add this line only
    })
  }
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})