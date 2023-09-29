import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav__container">
        <div className="nav__left">
          <Link className="nav__left--logo" to="/">
            <img src={require("../../Assets/Logo.png")} alt="logo" />
          </Link>
        </div>
        {/* <div className="nav__middle">
          <Link className="nav__link">link 1</Link>
          <Link className="nav__link">link 2</Link>
          <Link className="nav__link">link 3</Link>
          <Link className="nav__link">link 4</Link>
          <Link className="nav__link">link 4</Link>
        </div>
        <div className="nav__right">
          <Link className="nav__link" to="/signin">
            Sign in
          </Link>
          <Link className="nav__link" to="/signup">
            Sign up
          </Link>
        </div> */}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
