import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { GETACTIVEUSER, GETORDERS } from "../../constant/constants";
import Swal from "sweetalert2";
import { FETCHPRODUCT } from "../../constant/constants";
import OrderTable from "./orderTable";

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState([]);

  const headerData = {
    Authorization: Cookies.get("accessToken"),
    "Content-Type": "application/json",
  };

  const fetchOrders = () => {
    setLoading(true);
    axios
      .get(GETORDERS, { headers: headerData })
      .then((response) => {
        setOrders(response.data);
        listOrderData();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        Swal.fire({
          icon: "error",
          title: "Error in loading data",
          text: error.message,
        });
      });
  };

  const fetchUserDetail = () => {
    axios
      .get(GETACTIVEUSER, { headers: headerData })
      .then((response) => setUserDetail(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchOrders();
    fetchUserDetail();
  }, []);

  const listOrderData = () => {
    orders.map((data, index) => {
      axios
        .get(FETCHPRODUCT + data.productId)
        .then((response) => {
          setOrders(...orders, response.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  };

  let orderJSX = (
    <div className="container">
      <div className="row">
        <div className="">Total Rewards : {userDetail.rewardPoint}</div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ordered Date</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Order Status</th>
              <th scope="col">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((data) => (
              <OrderTable data={data} key={data.id}></OrderTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  if (loading === true) {
    orderJSX = (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return orderJSX;
};
export default OrderDashboard;
