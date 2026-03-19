import { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import { CartContext } from "./CartContext";
function Header({ setKeyword }) {
  const { cart } = useContext(CartContext);
    return(
    <nav className="navbar row fixed-top">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to="/">
            <img width="150px" src="/image.png" alt="Logo" />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-6 mt-2 mt-md-0">
        <Search setKeyword={setKeyword} />
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <span id="cart" className="ml-3">Cart</span>
          <span className="ml-1" id="cart_count">{cart.length}</span>
        </Link>
      </div>
    </nav>
    )
}
export default Header
