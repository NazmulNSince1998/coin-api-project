import React from "react";

const Coinlist = (props) => {
  return (
    <>
      <div className="grid grid-cols-4 lg:grid-cols-6 my-4 bg-[#272a27] text-white px-4 py-2 rounded-md shadow-xl shadow-black hover:scale-[1.01] hover:transition-all">
        <span>{props.coins.market_cap_rank}</span>
        <div className="flex items-center">
          <img
            src={props.coins.image}
            alt=""
            className="w-[25px] h-[25px] object-cover"
          />
          {props.coins.symbol.toUpperCase()}
        </div>
        <span>${props.coins.current_price.toLocaleString()}</span>
        <span>{props.coins.price_change_percentage_24h.toFixed(2)}%</span>
        <span className="hidden lg:block">
          ${props.coins.total_volume.toLocaleString()}
        </span>
        <span className="hidden lg:block">
          ${props.coins.market_cap.toLocaleString()}
        </span>
      </div>
    </>
  );
};

export default Coinlist;
