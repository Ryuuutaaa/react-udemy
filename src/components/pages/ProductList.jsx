import { NavLink } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h2>of list product</h2>
      <nav>
        <NavLink>Featured</NavLink>
        <NavLink>New</NavLink>
      </nav>
    </div>
  );
};

export default ProductList;
