import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartAction";

export default function Product({ product }) {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    function addtocart() {
        dispatch(addToCart(product, quantity));
    }

    return (
        <div className="shadow-lg p-3 mb-5 bg-body rounded h-100 position-relative">
            <h1>{product.name}</h1>
            <img
                src={product.img}
                alt={product.alt}
                className="img-fluid card-img-top"
                style={{ height: "200px", width: "300px" }}
            />
            <p className="card-body">{product.desc}</p>
            <div className="flex-container position-absolute bottom-0 w-100 end-0">
                <div className="m-1 w-100">
                    <h1 className="mt-1">Prices: {product.price}</h1>
                </div>
                <div className="m-1 w-100">
                    <button className="btn btn-danger fw-bolder w-75" onClick={addtocart}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
