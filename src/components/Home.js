import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../actions/productAction";
import Error from "./Error";
import Filter from "./Filter";
import Loading from "./Loading";
import Product from "./Product";

export default function Home() {
    const dispatch = useDispatch();
    const productsstate = useSelector((state) => state.getAllProductsReducer);
    const { products, error, loading } = productsstate;

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div>
            <Filter />
            <div className="row justify-content-center">
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error error="Something went wrong!" />
                ) : (
                    products.map((product) => {
                        return (
                            <div className="col-md-3 m-3" key={product._id}>
                                <Product product={product} />
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
