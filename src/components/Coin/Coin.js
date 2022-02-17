import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
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
  user,
  key,
}) {
  async function handleFavoriteClick(e) {
    try {
      if (!user) {
        toast.success(`Please Sign in to Add Favorites`, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        let jwtToken = window.localStorage.getItem("jwtToken");

        const config = {
          headers: { Authorization: `Bearer ${jwtToken}` },
        };

        const payload = await axios.post(
          "http://localhost:3001/api/coin/add-new"
        );
      }
    } catch (e) {}
  }

  return (
    <div className="coin-item">
      <div className="item-row">
        <div className="coin">
          <p className="rank">{rank}</p>
          <img src={image} alt="icon" />
          <Link to={`fetch-coin/`}>
            <h1>{name}</h1>
          </Link>
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
            <p className="market-cap">
              Market Cap ${marketCap.toLocaleString()}
            </p>
          )}
          <button className="favortite-btn"></button>
        </div>
      </div>
    </div>
  );
}

export default Coin;
