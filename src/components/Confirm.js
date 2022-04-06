import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { deleteFromCart } from "../actions/cartAction";
import { placeOrder } from "../actions/orderAction";

export default function Confirm({ subTotal }) {
    const dispatch = useDispatch();

    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    return (
        <div>
            <button
                className="btn btn-warning fw-bolder"
                onClick={() => {
                    if (subTotal > 0) {
                        dispatch(placeOrder(subTotal));
                        cartItems.map((item) => {
                            return dispatch(deleteFromCart(item));
                        });
                    }
                }}
            >
                Confirm
            </button>
        </div>
    );
}
