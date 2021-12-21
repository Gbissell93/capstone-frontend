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
    <div>
      <div className="coin-item">
        <div className="item-row">
          <div className="coin">
            <p className="rank">{rank}</p>
            <img src={image} alt="icon" />
            <h1>{name}</h1>
            <p className="symbol">{symbol}</p>
          </div>
          <div className="data">
            <p className="price">${price.toLocaleString()}</p>
            <p className="volume"> ${volume.toLocaleString()}</p>
          </div>
          {priceChange < 0 ? (
            <p className="percent-change red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="percent-change green">+{priceChange.toFixed(2)}%</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Coin;
