import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderAction";
import Error from "./Error";
import Loading from "./Loading";

export default function Orders() {
    const dispatch = useDispatch();
    const orderstate = useSelector((state) => state.getUserOrdersReducer);
    const { orders, error, loading } = orderstate;

    useEffect(() => {
        dispatch(getUserOrders());
    }, []);

    return (
        <div>
            <div className="row justify-content-center">
                <h1 className="fw-bold fs-3">Orders</h1>
                {loading && <Loading />}
                {error && <Error error="Something went wrong" />}
                {orders &&
                    orders.map((order, indexOrder) => {
                        return (
                            <div className="col-md-8 m-2 p-3 mb-2 bg-primary text-white" key={indexOrder}>
                                <div className="flex-container">
                                    <div className="text-start w-100 m-3">
                                        <h2 className="fs-2">Items</h2>
                                        <hr />
                                        {order.orderItems.map((item, indexItem) => {
                                            return (
                                                <div key={indexItem}>
                                                    <p>
                                                        {item.name}: {item.quantity} * {item.price} = {item.prices}{" "}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="text-start w-100 m-3">
                                        <h2 className="fs-2">Order Info</h2>
                                        <hr />
                                        <p>Order amount: {order.orderAmount}</p>
                                        <p>Order date: {order.createdAt.substring(0, 10)}</p>
                                        <p>Order ID: {order._id}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
