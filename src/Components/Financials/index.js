import React, { useEffect, useState } from "react";

export default ({ data }) => {
  return data.length ? (
    <div>
      <h4>Balance Sheet - Apple</h4>
      <p>{data[0].date}</p>
      <p>Cash and cash equivalent: {data[0]["Cash and cash equivalents"]}</p>
      <p>Long-term debt: {data[0]["Long-term debt"]}</p>
      <p>Net Debt: {data[0]["Net Debt"]}</p>
      <p>
        Retained earnings (deficit): {data[0]["Retained earnings (deficit)"]}
      </p>
      <p>Total assets: {data[0]["Total assets"]}</p>
      <p>Total current assets: {data[0]["Total current assets"]}</p>
      <p>Total current liabilities: {data[0]["Total current liabilities"]}</p>
    </div>
  ) : (
    <h3>error</h3>
  );
};
