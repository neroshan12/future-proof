import React, { useEffect, useState } from "react";

export default ({ data }) => {
  console.log("this is data", data.mostLoserStock);
  return data.mostLoserStock ? (
    <div>
      <h4>Biggest Loser</h4>

      {data.mostLoserStock.map((item, i) => {
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
