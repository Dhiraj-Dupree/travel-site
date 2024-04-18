import MainImg from "../../assets/main.jpg";

const main = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${MainImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "200px",
      }}
    >
      <div className="card">
        <div className="cardContents">
          <em>Visit Location</em>
          <p>After you view locations, click here to set a time to go!</p>
          <button>
            {" "}
            <em>Set Date</em>
          </button>
        </div>
      </div>
    </div>
  );
};

export default main;
