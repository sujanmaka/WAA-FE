import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/config/storeConfig";

const Header = () => {
  const cart = useSelector((state) => state.cartData.cart);

  console.log(cart);

  const dispatch = useDispatch;

  const addToCart = () => {
    let action = {
      type: "add",
      payload: {
        id: 1,
        title: "IPhone",
      },
    };
    dispatch(cartAction.add(action));
  };

  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <div className="logo">
              <Link to="index.html">
                <img src="/images/logo.png" alt="Orani E-shop" />
              </Link>
            </div>
          </div>

          <div className="col-md-7 col-sm-5">
            <div className="search-form">
              <form className="navbar-form" role="search">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="What do you need..."
                  />
                </div>

                <button type="submit" className="btn">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-2 col-sm-3">
            <div className="cart">
              <div className="cart-icon">
                <button onClick={() => addToCart()}>
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </div>

              <div className="cart-text">
                SHOPPING CART
                <br />
                {cart.length} items - $0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
