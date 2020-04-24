import React, { useEffect, useState } from "react";

export default ({ data }) => {
  return data.mostGainerStock ? (
    <div style={{ borderRight: "1px solid grey" }}>
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
