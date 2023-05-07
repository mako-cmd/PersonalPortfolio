import Navbar_Logo from "./Navbar_Logo";
import Navbar_Item from "./Navbar_Item";

const Navbar = () => {
  return (
    <>
      <div className="navbar-wrapper flex place-content-center place-items-center h-24 w-screen mt-11">
        <div className="navbar h-14 w-4/5 bg-white rounded-full shadow-md flex place-items-center">
          <Navbar_Logo src="earth.png" />
          <Navbar_Item label="Home" />
          <Navbar_Item label="Skills" />
          <Navbar_Item label="Projects" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
