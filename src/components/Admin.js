import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Admin() {
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = "/";
        }
    }, []);

    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h2>Admin Panel</h2>
                    <ul className="admin-functions">
                        <li>
                            <Link to="/admin/userslist">Users List</Link>
                        </li>
                        <li>
                            <Link to="/admin/productslist">Products List</Link>
                        </li>
                        <li>
                            <Link to="/admin/addproduct">Add New Product</Link>
                        </li>
                        <li>
                            <Link to="/admin/orderslist">Orders List</Link>
                        </li>
                    </ul>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
