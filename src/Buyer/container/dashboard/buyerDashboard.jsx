import React from "react";

import Slider from "../../components/sliders/sliders";
import Banner from "../../components/banner/banner";
import ShoppingProcess from "../../components/shopping-process/shopping-process";
import FeaturedProduct from "../../components/featured-item/featured-item";
import PopularProduct from "../../components/popular-item/popular-product";

const BuyerDashboard = () => {
  return (
    <React.Fragment>
      <Slider />
      <Banner />
      <ShoppingProcess />
      <FeaturedProduct />
      <PopularProduct />
    </React.Fragment>
  );
};
export default BuyerDashboard;
