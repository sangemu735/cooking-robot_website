import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Carts from "./components/Carts";
import Register from "./components/Register";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Admin from "./components/Admin";
import UsersList from "./components/UsersList";
import OrdersList from "./components/OrdersList";
import ProductsList from "./components/ProductsList";
import AddProducts from "./components/AddProducts";
import EditProduct from "./components/EditProduct";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/cart" element={<Carts />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/admin" element={<Admin />}>
                    <Route path="userslist" element={<UsersList />} />
                    <Route path="orderslist" element={<OrdersList socket={socket} />} />
                    <Route path="productslist" element={<ProductsList />} />
                    <Route path="addproduct" element={<AddProducts />} />
                    <Route path="editproduct/:productId" element={<EditProduct />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
