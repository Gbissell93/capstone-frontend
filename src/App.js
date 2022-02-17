import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

import "./App.css";
import CoinList from "./components/CoinList/CoinList";
import Header from "./components/Header/Header";
import Signin from "./components/SignIn/SignIn";
import Signup from "./components/SignUp/SignUp";
import Logout from "./components/Logout/Logout";
import CoinDeatail from "./components/CoinDetail/CoinDeatail";
import CoinDeatil from "./components/CoinDetail/CoinDeatail";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let jwtToken = window.localStorage.getItem("jwtToken");
    if (jwtToken) {
      let decodedToken = jwt_decode(jwtToken);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        window.localStorage.removeItem("jwtToken");
        setUser(null);
      } else {
        setUser({
          email: decodedToken.email,
          username: decodedToken.username,
          name: decodedToken.name,
        });
      }
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Header user={user} />
        <Routes>
          <Route
            exact
            path="/fetch-coin/:id"
            element={<CoinDeatil user={user} />}
          />
          <Route exact path="/" element={<CoinList />} />
          <Route exact path="/sign-up" element={<Signup />} />
          <Route exact path="/sign-in" element={<Signin setUser={setUser} />} />
          <Route exact path="/logout" element={<Logout setUser={setUser} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
