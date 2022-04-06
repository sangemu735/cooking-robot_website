import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, deleteFromCart } from "../actions/cartAction";
import { Modal, Button } from "react-bootstrap";
import Confirm from "./Confirm";

function Carts() {
    const cartstate = useSelector((state) => state.cartReducer);
    const cartItems = cartstate.cartItems;
    const subTotal = cartItems.reduce((x, item) => x + item.prices, 0);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 style={{ fontsize: "40px" }}>My Cart</h2>
                    {cartItems.map((item, index) => {
                        return (
                            <div className="flex-container" key={index}>
                                <div className="text-start m-1 w-100">
                                    <h1>{item.name}</h1>
                                    <h1>
                                        Price: {item.quantity} * {item.price} = {item.prices.toFixed(2)}
                                    </h1>
                                    <h1 style={{ display: "inline" }}>Quantity: </h1>
                                    <i
                                        className="fa-solid fa-plus"
                                        onClick={() => {
                                            dispatch(addToCart(item, item.quantity + 1));
                                        }}
                                    ></i>
                                    <b>{item.quantity}</b>
                                    <i
                                        className="fa-solid fa-minus"
                                        onClick={() => {
                                            dispatch(addToCart(item, item.quantity - 1));
                                        }}
                                    ></i>
                                    <hr />
                                </div>
                                <div className="m-1 w-100">
                                    <img src={item.img} alt={item.name} style={{ height: "80px", width: "80px" }} />
                                </div>
                                <div className="m-1 w-100">
                                    <i
                                        className="fa-solid fa-trash mt-5"
                                        onClick={() => {
                                            dispatch(deleteFromCart(item));
                                        }}
                                    ></i>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="col-md-4 text-right">
                    <h2 style={{ fontsize: "45px" }}>SubTotal: {subTotal.toFixed(2)}$</h2>
                    <button className="btn btn-warning btn-lg p-2" onClick={handleShow}>
                        <Confirm subTotal={subTotal.toFixed(2)} />
                    </button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <div style={{ backgroundColor: "#85ff22c9" }} className="text-center">
                    <div className="mt-3">
                        <i class="fa-regular fa-circle-check"></i>
                    </div>
                    <Modal.Body className="text-white fs-4">
                        <h2>Done!</h2>
                        <p>Order will be ready in 2 minutes</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button className="btn btn-primary">
                            <Link to="/orders">Go to the orders</Link>
                        </button>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    );
}

export default Carts;
