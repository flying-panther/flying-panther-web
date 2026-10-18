
import data from "./data";

function Fulfillment() {
  return (
    <div className="content content-margined">
      <h3>Order Fulfillment</h3>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ORDER ID</th>
              <th>CUSTOMER</th>
              <th>STATUS</th>
              <th>CARRIER</th>
              <th>TRACKING NUMBER</th>
            </tr>
          </thead>

          <tbody>
            {data.map((order) => (
              <tr
                key={order.orderId}
                className={
                  order.shipped
                    ? ""
                    : "fulfillment-unshipped"
                }
              >
                <td>{order.orderId}</td>
                <td>{order.customer}</td>
                <td>
                  {order.shipped
                    ? "Shipped"
                    : "Unshipped"}
                </td>
                <td>{order.carrier}</td>
                <td>{order.trackingNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fulfillment;
