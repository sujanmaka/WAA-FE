import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../store/config/storeConfig";

// const data = {
//   linkOne: {
//     component: "<ProductDetail>",
//     href: "",
//     label: "Blue Shirt",
//   },
// };

const ProductDetail = () => {
  const cart = useSelector((state) => state.cartData.cart);
  const dispatch = useDispatch();

  const qtyRef = useRef();

  const getProductDetail = () => {
    return {
      id: 1,
      product: "Blue Jacket",
      brand: "Nike",
      price: "552.00",
      qty: qtyRef.current.value,
    };
  };

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(cartAction.add(getProductDetail()));
  };

  const executeSub = () => {
    if (qtyRef.current.value > 0) {
      qtyRef.current.value = qtyRef.current.value - 1;
    }
  };

  const executeAdd = () => {
    const data = qtyRef.current.value;
    qtyRef.current.value = data + 1;
  };

  return (
    <Fragment>
      {/* <BreadCums data={data} /> */}
      <div className="short-description">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-thumbnail">
                <div className="col-md-2 col-sm-2 col-xs-2">
                  <ul className="thumb-image">
                    <li className="active">
                      <a href="/images/single-product-1.jpg">
                        <img src="/images/single-product-1.jpg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="/images/single-product-2.jpg">
                        <img src="/images/single-product-2.jpg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="/images/single-product-3.jpg">
                        <img src="/images/single-product-3.jpg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="http//www:google.com">
                        <img src="/images/single-product-4.jpg" alt="" />
                      </a>
                    </li>

                    <li>
                      <a href="http//www:google.com">
                        <img src="/images/single-product-5.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-md-10 col-sm-10 col-xs-10">
                  <div className="thumb-main-image">
                    <Link to="">
                      <img src="/images/single-product-1.jpg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="clearfix"></div>
            </div>

            <div className="col-md-6">
              <h1 className="product-title">Blue Jacket</h1>

              <div className="ratings">
                <i className="fa fa-star"></i>

                <i className="fa fa-star"></i>

                <i className="fa fa-star"></i>

                <i className="fa fa-star"></i>

                <i className="fa fa-star"></i>

                <span className="vote-count">35 vote</span>
              </div>

              <div className="product-info">
                <span className="product-id">
                  <span className="strong-text">Product ID:</span> RST 4562
                </span>

                <span className="product-avilability">
                  <span className="strong-text">Availability:</span> In Stock
                </span>
              </div>

              <p className="short-info">
                Lorem ipsum dolor sit amet, feugiat delicata liberavisse id cum,
                no quo maiorum intellegebat, liber regione eu sit. Mea cu case
                ludus integre, vide viderer eleifend ex mea. His at soluta
                regione diceret, cum et atqui placerat petentium. Lorem ipsum
                dolor sit amet, feugiat delicata liberavisse id cum, no quo
                maiorum intellegebat, lie diceret, cum et atqui placerat
                petentium.
              </p>

              <div className="price">
                <span>$522.00</span>
              </div>

              <form action="" className="purchase-form">
                <div className="qt-area">
                  <i className="fa fa-minus" onClick={() => executeSub()}></i>

                  <input
                    name="quantity"
                    className="qt"
                    value="1"
                    ref={qtyRef}
                  />

                  <i className="fa fa-plus" onClick={() => executeAdd()}></i>
                </div>

                <button
                  className="btn btn-theme"
                  type="submit"
                  onClick={(e) => addToCart(e)}
                >
                  Add to cart
                </button>
              </form>

              <p>
                <span className="strong-text">Categories:</span> Pants, T-Shirt,
                Jama
              </p>

              <p>
                <span className="strong-text">Tags:</span> GonShop, theme-sky,
                woocommerce, wordpress
              </p>

              {/* <ul className="product-info-btn">
                <li>
                  <Link to="">
                    <i className="fa fa-heart-o"></i> Wishlist
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <i className="fa fa-arrows-h"></i> Compare
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <i className="fa fa-envelope-o"></i> Email
                  </Link>
                </li>

                <li>
                  <Link to="">
                    <i className="fa fa-print"></i> Print
                  </Link>
                </li>
              </ul> */}

              <p>
                <i className="fa fa-check"></i> Let's start with the most
                essential part of any written content. At the early
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="single-product-tabs">
            <ul className="nav nav-tabs nav-single-product-tabs">
              <li className="active">
                <Link to="#description" data-toggle="tab">
                  Description
                </Link>
              </li>

              <li>
                <Link to="#reviews" data-toggle="tab">
                  Reviews
                </Link>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="description">
                <div className="product-desc">
                  <h2>Product Description</h2>

                  <p>
                    Ultricies et consectetur rhoncus lorem mattis, ligula
                    interdum nibh dolor ipsum, venenatis ultrices sem nisl
                    senectus phasellus lectus facilisis gravida curabitur
                    interdum pretium et pellentesque nullam auctor vestibulum
                    aenean ipsum placerat erat volutpat lectus mi est lacinia
                    sociosqu, pretium habitasse aenean eros tristique augue a
                    vivamus ac, sapien blandit nullam et neque curabitur varius
                    nostra dui dictum cras orci congue. Ultricies et consectetur
                    rhoncus lorem mattis, ligula interdum nibh dolor ipsum,
                    venenatis ultrices sem nisl senectus phasellus lectus
                    facilisis gravida curabitur interdum pretium et pellentesque
                    nullam auctor vestibulum aenean ipsum placerat
                  </p>
                </div>
              </div>

              <div className="tab-pane" id="reviews">
                <div className="product-desc">
                  <h2>Product Review</h2>
                  <p>
                    Ultricies et consectetur rhoncus lorem mattis, ligula
                    interdum nibh dolor ipsum, venenatis ultrices sem nisl
                    senectus phasellus lectus facilisis gravida curabitur
                    interdum pretium et pellentesque nullam auctor vestibulum
                    aenean ipsum placerat erat volutpat lectus mi est lacinia
                    sociosqu, pretium habitasse aenean eros tristique augue a
                    vivamus ac, sapien blandit nullam et neque curabitur varius
                    nostra dui dictum cras orci congue. Ultricies et consectetur
                    rhoncus lorem mattis, ligula interdum nibh dolor ipsum,
                    venenatis ultrices sem nisl senectus phasellus lectus
                    facilisis gravida curabitur interdum pretium et pellentesque
                    nullam auctor vestibulum aenean ipsum placerat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="related-items">
            <ul className="nav nav-tabs nav-single-product-tabs">
              <li className="active">
                <Link to="#related" data-toggle="tab">
                  Related Products
                </Link>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="related">
                {/* Related Product */}

                <div className="col-md-3 col-sm-4">
                  <div className="single-product">
                    <div className="product-block">
                      <img
                        src="/images/product-4.jpg"
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
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End of Realted Product */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductDetail;
