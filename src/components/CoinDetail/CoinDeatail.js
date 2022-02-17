import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function CoinDeatil({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [volume, setvolume] = useState("");
  const [circulatingSupply, setCirculatingSupply] = useState("");
  const [ATH, setATH] = useState("");
  const [priceChange, setPriceChange] = useState("");
  const [symbol, setSymbol] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchCoinDetail();
  });

  async function fetchCoinDetail() {
    try {
      const payload = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
      );
      console.log(payload);
      setName();
    } catch (e) {}
  }

  return <div></div>;
}

export default CoinDeatil;
