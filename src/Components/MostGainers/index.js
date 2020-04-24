import React, { useEffect, useState } from "react";

export default ({ data }) => {
  console.log("this is data", data.mostGainerStock);
  return data.mostGainerStock ? (
    <div>
      <h4>Biggest Gainers</h4>

      {data.mostGainerStock.map((item, i) => {
        return (
          <p key={i}>
            {item.ticker} - {item.companyName} - {item.price} -{" "}
            {item.changesPercentage}{" "}
          </p>
        );
      })}
    </div>
  ) : (
    <h3>error</h3>
  );
};
