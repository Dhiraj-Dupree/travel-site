import Sky from "../../assets/sky.jpg";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Sky})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "300px",
      }}
    >
      <div className="heroSection">
        <div className="intro">
          <em>Explore.</em>
          <p>Sign Up & Find Yourself</p>
        </div>
        <div className="heroPar">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            deleniti sed fuga illum vitae reiciendis eligendi fugit, quasi
            possimus, odio ex expedita nobis eum dicta temporibus qui at. Iste,
            quod!
          </p>
        </div>
        <div className="locations">
          <p>
            <em>Find your next travel point</em>
          </p>
          <button>
            <em>Locations</em>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
