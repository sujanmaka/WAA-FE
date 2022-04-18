import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          {/* banner starting  */}

          <div className="col-md-4 col-sm-4">
            <div
              className="single-banner"
              style={{ backgroundImage: "url(/images/banner-1.jpg)" }}
            >
              <div className="banner-caption">
                <h3>Awesome Bag Collection</h3>

                <Link to="" className="btn btn-theme">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>

          {/* banner ending */}
        </div>
      </div>
    </div>
  );
};
export default Banner;
