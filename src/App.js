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

const socket = io("https://cooking-robot-api.herokuapp.com:56085");

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="https://sangemu735.github.io/cooking-robot_website/" exact element={<Home />} />
                <Route path="https://sangemu735.github.io/cooking-robot_website/cart" element={<Carts />} />
                <Route path="https://sangemu735.github.io/cooking-robot_website/register" element={<Register />} />
                <Route path="https://sangemu735.github.io/cooking-robot_website/login" element={<Login />} />
                <Route path="https://sangemu735.github.io/cooking-robot_website/orders" element={<Orders />} />
                <Route path="https://sangemu735.github.io/cooking-robot_website/admin" element={<Admin />}>
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
