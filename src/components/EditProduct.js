import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { editProduct, getProductById } from "../actions/productAction";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function EditProduct() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [alt, setAlt] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState();

    const params = useParams();
    const dispatch = useDispatch();

    const getproductbyidstate = useSelector((state) => state.getProductByIdReducer);
    const { error, loading, product } = getproductbyidstate;

    const editproductstate = useSelector((state) => state.editProductReducer);
    const { editError, editLoading, editSuccess } = editproductstate;

    useEffect(() => {
        if (product) {
            if (product._id === params.productId) {
                setName(product.name);
                setImg(product.img);
                setAlt(product.alt);
                setDesc(product.desc);
                setPrice(product.price);
            } else {
                dispatch(getProductById(params.productId));
            }
        } else {
            dispatch(getProductById(params.productId));
        }
    }, [product, dispatch]);

    function formHandler(e) {
        e.preventDefault();

        const editedProduct = {
            _id: params.productId,
            name,
            img,
            alt,
            desc,
            price,
        };
        // console.log(editedProduct);
        dispatch(editProduct(editedProduct));
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <div className="text-start">
                {loading && <Loading />}
                {error && <Error error="Something went wrong" />}
                {editLoading && <Loading />}
                {editSuccess && <Success success="Product details edited successfully" />}

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
                        Edit Product
                    </button>
                </form>
            </div>
        </div>
    );
}
