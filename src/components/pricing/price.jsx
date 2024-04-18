import PriceImg from "../../assets/pricing.jpg";
const price = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${PriceImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "200px",
      }}
    >
      <div className="priceCard">
        <p>
          <em>Become A Member</em>
        </p>
        <div className="memberInfo">
          <div className="rare">
            <p>Rare Traveler</p>
            <p>
              <em>$9.99 per year</em>
            </p>
            <button>Join</button>
          </div>
          <div className="EveryMonth">
            <p>Every Month</p>
            <p>
              <em>$19.99 per year</em>
            </p>
            <button>Join</button>
          </div>
          <div className="freq">
            <p>Frequent Traveler</p>
            <p>
              <em>$79.99 per year</em>
            </p>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default price;
