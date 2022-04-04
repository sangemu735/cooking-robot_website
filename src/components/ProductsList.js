import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
import Success from "./Success";
import Loading from "./Loading";
import { deleteProduct, getAllProducts } from "../actions/productAction";
import { Link } from "react-router-dom";

export default function ProductsList() {
    const dispatch = useDispatch();
    const productsstate = useSelector((state) => state.getAllProductsReducer);
    const { error, loading, products } = productsstate;

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div>
            <h2>Products List</h2>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}

            <table className="table table-bordered">
                <thead className="thead">
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((product, indexProduct) => {
                            return (
                                <tr key={indexProduct}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <i
                                            className="fa fa-trash m-2"
                                            onClick={() => {
                                                dispatch(deleteProduct(product._id));
                                            }}
                                        ></i>
                                        <Link to={`/admin/editproduct/${product._id}`}>
                                            <i className="fa fa-edit m-2"></i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}
