import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions/userAction";
import Error from "./Error";
import Loading from "./Loading";
import Success from "./Success";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerstate = useSelector((state) => state.registerUserReducer);
    const { error, loading, success } = registerstate;

    const dispatch = useDispatch();
    function register() {
        if (password !== confirmPassword) {
            alert("Password not matched");
        } else {
            const user = {
                name,
                email,
                password,
            };
            console.log(user);
            dispatch(registerUser(user));
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-3">
                <div className="col-md-5 mt-5 text-start shadow-lg p-3 mb-5 bg-body rounded">
                    {loading && <Loading />}
                    {success && <Success success="User Registered Successfully" />}
                    {error && <Error success="Email already register" />}

                    <h2 className="text-center m-2" style={{ fontsize: "35px" }}>
                        Register
                    </h2>
                    <div>
                        <input
                            type="text"
                            placeholder="name"
                            className="form-control"
                            required
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
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
                        <input
                            type="password"
                            placeholder="confirm password"
                            className="form-control"
                            required
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                        <button className="btn btn-primary mt-3 mb-3" onClick={register}>
                            REGISTER
                        </button>
                        <br />
                        <button
                            as={Link}
                            to="/login"
                            style={{ border: "none", textDecoration: "underline" }}
                            className="btn mt-2 fw-bold"
                        >
                            Click Here To Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
