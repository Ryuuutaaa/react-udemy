import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/posts">Posts </NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
};

export default Navbar;
