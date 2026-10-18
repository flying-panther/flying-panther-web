
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home/Home";
import Products from "./Products/Products";
import Orders from "./Orders/Orders";
import OrderDetail from "./Orders/OrderDetail";
import Payment from "./Payment/Payment";
import Fulfillment from "./Fulfillment/Fulfillment";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar")?.classList.add("open");
  };

  const closeMenu = () => {
    document.querySelector(".sidebar")?.classList.remove("open");
  };

  return (
    <Router>
      <div className="grid-container">

        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <a href="/">Flying Panther</a>
          </div>

          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/payment">Payment</Link>
            <Link to="/fulfillment">Fulfillment</Link>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button
            className="sidebar-close-button"
            onClick={closeMenu}
          >
            x
          </button>

          <ul>
            <li><Link to="/">Pants</Link></li>
            <li><Link to="/catalog">Shirts</Link></li>
          </ul>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<OrderDetail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/fulfillment" element={<Fulfillment />} />
          </Routes>
        </main>

        <footer className="footer">
          &copy; 2022 Flying Panther
        </footer>

      </div>
    </Router>
  );
}

export default App;
