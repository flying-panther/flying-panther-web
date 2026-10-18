
import { useParams } from "react-router-dom";
import data from "./data";

function OrderDetail() {
  const { id } = useParams<{ id: string }>();

  const order = data.orders.find(
    (o) => o._id === Number(id)
  );

  return (
    <div>
      {order ? (
        <h3>Order name: {order.user.name}</h3>
      ) : (
        <h3>Order not found</h3>
      )}
    </div>
  );
}

export default OrderDetail;
