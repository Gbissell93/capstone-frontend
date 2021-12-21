import React from "react";
import "./Coin.css";

function Coin({
  name,
  price,
  volume,
  symbol,
  image,
  priceChange,
  rank,
  marketCap,
}) {
  return (
    <div className="coin-item">
      <div className="item-row">
        <div className="coin">
          <p className="rank">{rank}</p>
          <img src={image} alt="icon" />
          <h1>{name}</h1>
        </div>
        <div className="data">
          <p className="symbol">{symbol}</p>
          <p className="price">${price.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="percent-change red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="percent-change green">+{priceChange.toFixed(2)}%</p>
          )}
          <p className="volume"> ${volume.toLocaleString()}</p>
          {marketCap === null ? (
            <p className="market-cap">N/A</p>
          ) : (
            <p className="market-cap">${marketCap}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;
