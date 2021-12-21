import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Search/Search";
import Coin from "../Coin/Coin";

function Dashboard() {
  const [currencyArray, setCurrencyArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetchCoinData();
  });

  const fetchCoinData = async () => {
    try {
      await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
        )
        .then((response) => {
          setCurrencyArray(response.data);
          console.log(currencyArray);
        })
        .catch((e) => {
          setError(e);
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const searchResults = currencyArray.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="list-container">
        {searchResults.map((item, index) => {
          return (
            <Coin
              key={item.id}
              rank={index + 1}
              name={item.name}
              price={item.current_price}
              image={item.image}
              symbol={item.symbol}
              volume={item.market_cap}
              marketCap={item.total_supply}
              priceChange={item.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </>
  );
}

export default Dashboard;
