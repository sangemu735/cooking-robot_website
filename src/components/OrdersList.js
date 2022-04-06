import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";
import { deliverOrder, getAllOrders } from "../actions/orderAction";

export default function OrdersList({ socket }) {
    // const [socket, setSocket] = useState(null);

    const dispatch = useDispatch();
    const getallordersstate = useSelector((state) => state.getAllOrdersReducer);
    const { error, loading, orders } = getallordersstate;

    useEffect(() => {
        dispatch(getAllOrders());
    }, []);

    function handleDeliver(order) {
        socket.emit("confirm_message", {
            orderId: order._id,
            cartItems: order.orderItems.map((orderItem) => {
                return {
                    id: orderItem._id,
                    quantity: orderItem.quantity,
                };
            }),
        });
    }

    useEffect(() => {
        socket.on("delivered", (data) => {
            console.log("Delivered");
            dispatch(deliverOrder(data.orderId));
        });
    }, [socket]);

    return (
        <div>
            <h1>Orders List</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}
            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Email</th>
                            <th>User Id</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders &&
                            orders.map((order) => {
                                return (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.email}</td>
                                        <td>{order.userId}</td>
                                        <td>{order.orderAmount}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>
                                            {order.isDelivered ? (
                                                <h1 className="text-success">Delivered</h1>
                                            ) : (
                                                <button className="btn btn-danger" onClick={() => handleDeliver(order)}>
                                                    Deliver
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
