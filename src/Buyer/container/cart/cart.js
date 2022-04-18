import "./cart.css";
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";


const Cart = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className="pt-5 pb-5">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-lg-12 col-md-12 col-12">
                            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                            <p className="mb-5 text-center">
                                <i className="text-info font-weight-bold">3</i> items in your cart</p>
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

                                    {/* Body Section */}

                                    <tr>
                                        <td data-th="Product">
                                            <div className="row">
                                                <div className="col-md-3 text-left">
                                                    <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                                                </div>
                                                <div className="col-md-9 text-left mt-sm-2">
                                                    <h4>Product Name</h4>
                                                    <p className="font-weight-light">Brand &amp; Name</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td data-th="Price">$49.00</td>
                                        <td data-th="Quantity">
                                            <input type="number" className="form-control form-control-lg text-center" defaultValue={"1"} />
                                        </td>
                                        <td className="actions" data-th="">
                                            <div className="text-right">
                                                <button class="btn btn-primary">
                                                    Update
                                                </button>

                                                <button class="btn btn-danger">
                                                    X
                                                </button>


                                            </div>
                                        </td>
                                    </tr>


                                    {/* Body Section Ends */}

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