import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterProducts } from "../actions/productAction";

export default function Filter() {
    const dispatch = useDispatch();
    const [searchKey, setSearchKey] = useState("");
    return (
        <div className="container w-75">
            <div className="row justify-content-center mt-2 shadow-sm p-3 mb-5 bg-body rounded">
                <div className="col-md-2">
                    <input
                        type="text"
                        className="form-control w-100"
                        placeholder="search foods"
                        onChange={(e) => {
                            setSearchKey(e.target.value);
                        }}
                        value={searchKey}
                    />
                </div>
                <div className="col-md-2 mt-2">
                    <button className="btn btn-danger w-100" onClick={() => dispatch(filterProducts(searchKey))}>
                        FILTER
                    </button>
                </div>
            </div>
        </div>
    );
}
