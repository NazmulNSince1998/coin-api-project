import Coinlist from "./Coinlist";

const coins = (props) => {
  return (
    <div className="px-6 mt-6">
      <div className="grid lg:grid-cols-6 grid-cols-4 bg-[#272a27] text-white px-4 py-2 rounded-md shadow-xl shadow-black">
        <h2>#</h2>
        <h2>Coin</h2>
        <h2>Price</h2>
        <h2>24h</h2>
        <h2 className="hidden lg:block">Volume</h2>
        <h2 className="hidden lg:block">MktCap</h2>
      </div>

      {props.coins.map((coins) => (
        <Coinlist coins={coins} />
      ))}
    </div>
  );
};

export default coins;
