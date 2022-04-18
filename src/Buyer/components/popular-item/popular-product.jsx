import { Link } from "react-router-dom";

const PopularProducts = () => {
  return (
    <div className="popular-items">
      <div className="container">
        <div className="row">
          <ul className="nav nav-tabs nav-product-tabs">
            <li className="active">
              <Link to="#popular" data-toggle="tab">
                Popular
              </Link>
            </li>

            <li>
              <Link to="#special" data-toggle="tab">
                Special
              </Link>
            </li>

            <li className="pull-right collection-url">
              <Link to="">
                View All <i className="fa fa-long-arrow-right"></i>
              </Link>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active" id="popular">
              {/* popular items startign block */}

              <div className="col-md-3 col-sm-4">
                <div className="single-product">
                  <div className="product-block">
                    <img
                      src="/images/product-16.jpg"
                      alt=""
                      className="thumbnail"
                    />

                    <div className="product-description text-center">
                      <p className="title">Date Tiffany Torchiere</p>

                      <p className="price">$ 55.00</p>
                    </div>

                    <div className="product-hover">
                      <ul>
                        <li>
                          <Link to="">
                            <i className="fa fa-cart-arrow-down"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                            <i className="fa fa-arrows-h"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                            <i className="fa fa-heart-o"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* popular items ending block */}
            </div>

            <div className="tab-pane fade" id="special">
              {/* special items starting block */}

              <div className="col-md-3 col-sm-4">
                <div className="single-product">
                  <div className="product-block">
                    <img
                      src="/images/product-8.jpg"
                      alt=""
                      className="thumbnail"
                    />

                    <div className="product-description text-center">
                      <p className="title">Date Tiffany Torchiere</p>

                      <p className="price">$ 55.00</p>
                    </div>

                    <div className="product-hover">
                      <ul>
                        <li>
                          <Link to="">
                            <i className="fa fa-cart-arrow-down"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                            <i className="fa fa-arrows-h"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="">
                            <i className="fa fa-heart-o"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* special items ending block */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularProducts;
