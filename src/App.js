import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header } from './components/Header/Header'
import FinalSums from './components/FinalSums/FinalSums'
import { Filters } from './components/Filters/Filters'
import Table from './components/Table/Table'
import { UserContext } from './UserContext'

function App() {
  const [data, setData] = useState()
  const [filteredData, setFilteredData] = useState()
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d',
      )
      .then(result => {
        setData(result.data)
        setFilteredData(result.data)
      })
  }, [])
  return (
    <UserContext.Provider value={{ data, filteredData, setFilteredData }}>
      <div className='App'>
        <Header />
        <FinalSums />
        <Filters />
        <Table />
      </div>
    </UserContext.Provider>
  )
}

export default App
