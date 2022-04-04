import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../actions/userAction";
import Error from "./Error";
import Loading from "./Loading";

export default function UsersList() {
    const getallusersstate = useSelector((state) => state.getAllUsersReducer);
    const { error, loading, users } = getallusersstate;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}

            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>User id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users &&
                            users.map((user) => {
                                return (
                                    <tr key={user._id}>
                                        <td>{user._id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <i
                                                className="fa fa-trash"
                                                onClick={() => dispatch(deleteUser(user._id))}
                                            ></i>
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
