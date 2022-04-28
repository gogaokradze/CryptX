import React, { useEffect, useState, useContext } from 'react'
import classes from './FinalSums.module.css'
import { UserContext } from '../../UserContext'
const FinalSums = props => {
  const [sum, setSum] = useState({ market_cap: '', cap_change: '' })
  const { data } = useContext(UserContext)
  useEffect(() => {
    if (data) {
      let result = { cap: 0, trade: 0 }
      data.forEach(currency => {
        result.cap += currency.market_cap
        result.trade += currency.total_volume
      })
      setSum({ market_cap: result.cap, cap_change: result.trade })
    }
  }, [data])

  return (
    <div className={classes.center}>
      <div className={classes.display}>
        <div className={classes.container}>
          <p className={classes.money}>
            {'$'}
            {sum?.market_cap.toLocaleString()}
          </p>
          <p className={classes.name}>Market Capitalization</p>
        </div>
        <div className={classes.container}>
          <p className={classes.money}>
            {'$'}
            {sum?.cap_change.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
          <p className={classes.name}>24h Trading Volume</p>
        </div>
        <div className={classes.containerCoin}>
          <p className={classes.money}>{data?.length}</p>
          <p className={classes.name}>of Coins</p>
        </div>
      </div>
    </div>
  )
}

export default FinalSums
