import { NavLink, Outlet } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h2>of list product</h2>
      <nav>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default ProductList;
