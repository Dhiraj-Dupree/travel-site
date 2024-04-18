import Leaf from "../../assets/leaf-solid-24.png";
import Profile from "../../assets/user-regular-24.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Leaf} alt="Leaf Icon" className="logo" />

      <div className="rightSide">
        <img src={Profile} alt="User Icon" />
        <button>
          <em>Sign Up</em>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
