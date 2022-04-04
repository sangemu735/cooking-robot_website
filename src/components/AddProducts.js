import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../actions/productAction";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function AddProducts() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [alt, setAlt] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState();

    const dispatch = useDispatch();
    const addproductstate = useSelector((state) => state.addProductReducer);
    const { error, loading, success } = addproductstate;

    function formHandler(e) {
        e.preventDefault();

        const product = {
            name,
            img,
            alt,
            desc,
            price,
        };

        console.log(product);
        dispatch(addProduct(product));
    }

    return (
        <div>
            <h1>Add Products</h1>
            <div className="text-start">
                {loading && <Loading />}
                {error && <Error error="Something went wrong" />}
                {success && <Success success="Add new product successfully" />}

                <form onSubmit={formHandler}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="image url"
                        value={img}
                        onChange={(e) => {
                            setImg(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="image name"
                        value={alt}
                        onChange={(e) => {
                            setAlt(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Description"
                        value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                    />
                    <button className="btn btn-primary mt-2" type="submit">
                        Add product
                    </button>
                </form>
            </div>
        </div>
    );
}
