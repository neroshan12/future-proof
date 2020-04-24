import axios from "axios";

export async function gainers() {
  let stock = await axios.get(
    "https://financialmodelingprep.com/api/v3/stock/gainers"
  );
  return stock.data;
}

export async function losers() {
  let stock = await axios.get(
    "https://financialmodelingprep.com/api/v3/stock/losers"
  );
  return stock.data;
}
