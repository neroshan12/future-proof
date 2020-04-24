import React, { useEffect, useState } from "react";
import MostGainers from "../../Components/MostGainers";
import Losers from "../../Components/Losers";
import { gainers, losers } from "../../api";
import axios from "axios";

export default () => {
  const [gain, setGain] = useState("");
  const [loser, setLoser] = useState("");

  useEffect(() => {
    async function fetchData() {
      const gain = await gainers();
      setGain(gain);
      const loser = await losers();
      setLoser(loser);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Future Proof</h1>
      <MostGainers data={gain} />
      <Losers data={loser} />
    </div>
  );
};
