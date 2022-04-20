import axios from "axios";
import { useEffect, useState } from "react";
import { FETCHPRODUCT } from "../../constant/constants";

const OrderTable = (props) => {
  const [orderProductDetail, setOrderProductDetail] = useState([]);

  const fetchDetail = () => {
    axios
      .get(FETCHPRODUCT + props.data.productId)
      .then((response) => setOrderProductDetail(response.data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  return (
    <tr>
      <th scope="row"></th>
      <td>{props.data.orderDate}</td>
      <td><img src={orderProductDetail.picture} alt={orderProductDetail.name} style={{height:"100px"}}/><p style={{textAlign:"center"}}>{orderProductDetail.name}</p></td>
      <td>{props.data.quantity}</td>
      <td>{props.data.status}</td>
      <td>{props.data.payment}</td>
    </tr>
  );
};

export default OrderTable;
