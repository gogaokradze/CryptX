import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import classes from './Table.module.css'
import { FilterIcon } from '../../svg/icons'

const Table = () => {
  const { filteredData, setFilteredData } = useContext(UserContext)
  const [active, setActive] = useState(false)
  return (
    <div className={classes.table}>
      <div className={classes.head}>
        <div className={classes.number}>
          <button
            className={classes.filterButton}
            onClick={() => {
              let reversed = [...filteredData].reverse()
              setFilteredData(reversed)
              setActive(!active)
            }}
          >
            <FilterIcon className={classes.fill} active={active} />
          </button>
          #
        </div>
        <div className={classes.coin}>Coin</div>
        <div className={classes.coinName}></div>
        <div className={classes.price}>Price</div>
        <div className={classes.time}>1h</div>
        <div className={classes.time}>24h</div>
        <div className={classes.time}>7d</div>
        <div className={classes.volume}>24h Volume</div>
        <div className={classes.volume}>Mkt cap</div>
      </div>
      <div className={classes.body}>
        {filteredData?.length > 0 &&
          filteredData.map(
            (
              {
                currentPrice,
                id,
                sparkline_in_7d,
                market_cap_rank,
                market_cap,
                total_volume,
                name,
                symbol,
                image,
                current_price,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h_in_currency,
                price_change_percentage_7d_in_currency,
              },
              index,
            ) => (
              <div className={classes.row} key={index}>
                <div className={classes.number}>{market_cap_rank}</div>
                <div className={classes.coin}>
                  <img className={classes.symbol} src={image} alt='symbol' />
                  &emsp;
                  {name}
                </div>
                <div className={classes.coinName}>{symbol?.toUpperCase()}</div>
                <div className={classes.price}>
                  <p>
                    {'$'}
                    {current_price}
                  </p>
                </div>
                <div className={classes.time}>
                  <p
                    className={`${
                      price_change_percentage_1h_in_currency > 0
                        ? `${classes.green}`
                        : `${classes.red}`
                    }`}
                  >
                    {price_change_percentage_1h_in_currency?.toFixed(2)}%
                  </p>
                </div>
                <div className={classes.time}>
                  <p
                    className={`${
                      price_change_percentage_24h_in_currency > 0
                        ? `${classes.green}`
                        : `${classes.red}`
                    }`}
                  >
                    {price_change_percentage_24h_in_currency?.toFixed(2)}%
                  </p>
                </div>
                <div className={classes.time}>
                  <p
                    className={`${
                      price_change_percentage_7d_in_currency > 0
                        ? `${classes.green}`
                        : `${classes.red}`
                    }`}
                  >
                    {price_change_percentage_7d_in_currency?.toFixed(2)}%
                  </p>
                </div>
                <div className={classes.volume}>
                  {'$'}
                  {total_volume?.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className={classes.volume}>
                  {'$'}
                  {market_cap?.toLocaleString()}
                </div>
              </div>
            ),
          )}
      </div>
    </div>
  )
}

export default Table
