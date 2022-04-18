import { useSelector } from "react-redux";
import CartDetail from "../../components/cart/cart";
import "./cart.css";
const Cart = () => {

    const cart = useSelector(state => state.cartData.cart);

    const carts = cart.map(data => {
        return (<CartDetail productData={data}></CartDetail>);
    });

    return (
        <>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-lg-12 col-md-12 col-12">
                            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                            <p className="mb-5 text-center">
                                <i className="text-info font-weight-bold">{cart.length}</i> items in your cart</p>
                            <table id="shoppingCart" className="table table-condensed table-responsive">
                                <thead>
                                    <tr>
                                        <th style={{ "width": "60%" }}>Product</th>
                                        <th style={{ "width": "12%" }}>Price</th>
                                        <th style={{ "width": "10%" }}>Quantity</th>
                                        <th style={{ "width": "16%" }}></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {carts}


                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="row px-2">
                                        <div className="form-group col-md-6"> <label className="form-control-label">Name on Card</label> <input type="text" id="cname" name="cname" placeholder="Johnny Doe" /> </div>
                                        <div className="form-group col-md-6"> <label className="form-control-label">Card Number</label> <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444" /> </div>
                                    </div>
                                    <div className="row px-2">
                                        <div className="form-group col-md-6"> <label className="form-control-label">Expiration Date</label> <input type="text" id="exp" name="exp" placeholder="MM/YYYY" /> </div>
                                        <div className="form-group col-md-6"> <label className="form-control-label">CVV</label> <input type="text" id="cvv" name="cvv" placeholder="***" /> </div>
                                    </div>
                                    <button className="btn-block btn-blue"> <span><span id="checkout">Continue Shopping</span> </span> </button>
                                </div>

                                <div className=" col-lg-4 mt-2 " style={{ "float": "right" }}>
                                    <div className="row d-flex justify-content-between px-4">
                                        <p className="mb-1 text-left">Subtotal</p>
                                        <h6 className="mb-1 text-right">$23.49</h6>
                                    </div>
                                    <div className="row d-flex justify-content-between px-4">
                                        <p className="mb-1 text-left">Shipping</p>
                                        <h6 className="mb-1 text-right">$2.99</h6>
                                    </div>
                                    <div className="row d-flex justify-content-between px-4" id="tax">
                                        <p className="mb-1 text-left">Total (tax included)</p>
                                        <h6 className="mb-1 text-right">$26.48</h6>
                                    </div> <button className="btn-block btn-blue"> <span> <span id="checkout">Checkout</span> <span id="check-amt">$26.48</span> </span> </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;