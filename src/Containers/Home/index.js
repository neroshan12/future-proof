import React, { useEffect, useState } from "react";
import MostGainers from "../../Components/MostGainers";
import Losers from "../../Components/Losers";
import Financials from "../../Components/Financials";
import { gainers, losers, balanceSheet } from "../../api";
import axios from "axios";
import "./home.scss";

export default () => {
  const [gain, setGain] = useState("");
  const [loser, setLoser] = useState("");
  const [balance, setBalance] = useState("");

  useEffect(() => {
    async function fetchData() {
      const gain = await gainers();
      setGain(gain);
      const loser = await losers();
      setLoser(loser);
      const balance = await balanceSheet();
      setBalance(balance.data.financials);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Future Proof</h1>
      <div className="gain-loss">
        <MostGainers data={gain} />
        <Losers data={loser} />
      </div>

      <Financials data={balance} />
    </div>
  );
};
