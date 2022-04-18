const cartDetail = (props) => {
    return (
        <tr>
            <td data-th="Product">
                <div className="row">
                    <div className="col-md-3 text-left">
                        <img src="https://via.placeholder.com/250x250/5fa9f8/ffffff" alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                    </div>
                    <div className="col-md-9 text-left mt-sm-2">
                        <h4>{props.productData.product}</h4>
                        <p className="font-weight-light">{props.productData.brand}</p>
                    </div>
                </div>
            </td>
            <td data-th="Price">${props.productData.price}</td>
            <td data-th="Quantity">
                <input type="number" className="form-control form-control-lg text-center" defaultValue={props.productData.qty} />
            </td>
            <td className="actions" data-th="">
                <div className="text-right">
                    <button class="btn btn-primary">
                        <i class="fa-solid fa-rotate"></i>
                    </button>

                    <button class="btn btn-danger" style={{ "marginLeft": "10px" }}>
                        <i class="fa-solid fa-trash"></i>
                    </button>


                </div>
            </td>
        </tr>
    )

}
export default cartDetail;