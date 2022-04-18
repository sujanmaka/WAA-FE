
import { Route, Routes } from "react-router-dom"
import ProductDetail from "../../components/products/product-detail";
import Cart from "../../container/cart/cart";
import CheckBill from "../../container/cart/check";

import BuyerDashboard from "../../container/dashboard/buyerDashboard";

const BuyerRoutes = () => {


    return (
        <Routes>
            <Route path="/" element={<BuyerDashboard />} />
            <Route path="/dashboard" element={<BuyerDashboard />} />
            <Route path="/products" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/check" element={<CheckBill />} />
        </Routes>
    )
}
export default BuyerRoutes;