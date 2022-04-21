import React from "react";

export const CoinRow = ({
  name,
  image,
  current_price,
  market_cap,
  price_change_percentage_24h,
  total_volume,
  market_cap_rank,
}) => {
  return (
    <tr>
      <th className="p-2" scope="row">
        {market_cap_rank}
      </th>
      <td>
        <img
          src={image}
          className="img-fluid"
          style={{ width: 30 + "px", height: 30 + "px" }}
        />
      </td>
      <td>{name}</td>
      <td>{current_price}US$</td>
      <td
        className={
          price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {price_change_percentage_24h}%
      </td>
      <td>{total_volume}US$</td>
      <td>{market_cap}US$</td>
    </tr>
  );
};
