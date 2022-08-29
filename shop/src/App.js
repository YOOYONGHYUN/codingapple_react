import "./App.css";
import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import products from "./data";
import Shoe from "./Shoe";
import Detail from "./Detail";
import Event from "./Event";
import Cart from "./Cart";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";

function App() {
  useEffect(() => {
    if (localStorage.getItem("watched") === null)
      localStorage.setItem("watched", JSON.stringify([]));
  }, []);

  const [shoes, setShoes] = useState(products);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const handleCart = (value) => {
    setCart([...cart, value]);
  };
  const handleRemove = (value) => {
    setCart(value);
  };

  console.log(cart);

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Shoe shoes={shoes} setShoes={setShoes} />
            </>
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={<Detail shoes={shoes} handleCart={handleCart} cart={cart} />}
        ></Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        <Route
          path="/cart"
          element={<Cart cart={cart} handleRemove={handleRemove} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
