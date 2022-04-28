import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../UserContext'
import classes from './Filters.module.css'
import { Search } from '../../svg/icons'

export const Filters = () => {
  const { data, setFilteredData } = useContext(UserContext)
  const [activeFilters, setActiveFilters] = useState({
    coinName: '',
    priceFrom: '',
    priceTo: '',
  })

  const matchesCoinName = currency =>
    currency.name
      .toLowerCase()
      .includes(activeFilters.coinName.toLowerCase()) ||
    currency.symbol.toLowerCase().includes(activeFilters.coinName.toLowerCase())

  const isGreaterThanPriceFrom = currency =>
    currency.current_price >= activeFilters.priceFrom

  const isLessThanPriceTo = currency =>
    activeFilters.priceTo.length
      ? currency.current_price <= activeFilters.priceTo
      : true

  useEffect(() => {
    if (!data) return
    setFilteredData(
      data.filter(
        currency =>
          isGreaterThanPriceFrom(currency) &&
          isLessThanPriceTo(currency) &&
          matchesCoinName(currency),
      ),
    )
  }, [activeFilters, data])

  return (
    <div className={classes.div}>
      <div className={classes.position}>
        <div>
          <input
            className={classes.search}
            placeholder='Search by Coin'
            onChange={e =>
              setActiveFilters(prevValue => ({
                ...prevValue,
                coinName: e.target.value,
              }))
            }
            value={activeFilters.coinName}
          />
          <Search className={classes.searchIcon} />
        </div>
        <input
          className={classes.number}
          type='number'
          onChange={e =>
            setActiveFilters(prevValue => ({
              ...prevValue,
              priceFrom: e.target.value,
            }))
          }
          value={activeFilters.priceFrom}
          placeholder='Price from'
        />
        <input
          className={classes.number}
          type='number'
          onChange={e =>
            setActiveFilters(prevValue => ({
              ...prevValue,
              priceTo: e.target.value,
            }))
          }
          value={activeFilters.priceTo}
          placeholder='Price To'
        />
      </div>
    </div>
  )
}
