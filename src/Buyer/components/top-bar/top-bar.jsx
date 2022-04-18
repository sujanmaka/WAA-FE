import { useState } from "react";
import { Link } from "react-router-dom";
import BuyerLogin from "../login/buyerLogin";

const TopBar = () => {
  const [event, setEvent] = useState(true);

  const onLoginClickHandler = () => {
    setEvent(!event);
  };

  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="social pull-left">
              <ul>
                <li>
                  <Link to="">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <i className="fa fa-linkedin"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6">
            <div className="action pull-right">
              <ul>
                <li>
                  <button
                    className="btn btn-primary"
                    onClick={() => onLoginClickHandler()}
                  >
                    <i className="fa fa-user"></i> Login
                  </button>
                  <BuyerLogin event={event} />
                </li>

                <li>
                  <button className="btn btn-primary">
                    <i className="fa fa-lock"></i> Register
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
