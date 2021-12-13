import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "../Search/Search";

function Dashboard() {
  const [currencyArray, setCurrencyArray] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState("");
  //   useEffect(fetchCoinData);

  const fetchCoinData = async () => {
    try {
      let results = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(fetchCoinData);

  return (
    <div>
      <Search />
    </div>
  );
}

export default Dashboard;
