import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction";
import Error from "./Error";
import Loading from "./Loading";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginstate = useSelector((state) => state.loginUserReducer);
    const { error, loading } = loginstate;
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/";
        }
    }, []);

    function login() {
        const user = {
            email,
            password,
        };
        console.log(user);
        dispatch(loginUser(user));
    }

    return (
        <div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded">
                    <h2 className="text-center m-2" style={{ fontsize: "35px" }}>
                        Login
                    </h2>
                    {loading && <Loading />}
                    {error && <Error error="Ivalid Credenticals" />}
                    <div>
                        <input
                            type="text"
                            placeholder="email"
                            className="form-control"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="form-control"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button className="btn btn-primary mt-3 mb-3" onClick={login}>
                            LOGIN
                        </button>
                        <br />
                        <a style={{ color: "black" }} href="/register" className="mt-2 fw-bold">
                            Click Here To Register
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
