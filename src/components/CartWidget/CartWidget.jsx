import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/Cart">
      <i style={{ fontSize: "30px", display: "flex", alignItems: "center" }}>
        2
        <BsCart4 />
      </i>
    </Link>
  );
};

export default CartWidget;
