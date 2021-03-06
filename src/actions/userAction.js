import axios from "axios";

export const registerUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_REGISTER_REQUEST" });

    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/users/register", user);
        console.log(response);
        dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    }
};

export const loginUser = (user) => async (dispatch) => {
    dispatch({ type: "USER_LOGIN_REQUEST" });

    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/users/login", user);
        console.log(response);
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        window.location.href = process.env.PUBLIC_URL + "/";
    } catch (error) {
        dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    }
};

export const logoutUser = (user) => (dispatch) => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cartItems");
    window.location.href = process.env.PUBLIC_URL + "/login";
};

export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: "GET_ALL_USERS_REQUEST" });

    try {
        const response = await axios.get("https://cooking-robot-api.herokuapp.com/api/users/getallusers");
        console.log(response);
        dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "GET_ALL_USERS_FAILED", payload: error });
    }
};

export const deleteUser = (userId) => async (dispatch) => {
    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/users/deleteuser", { userId });
        alert("User Deleted Successfully");
        console.log(response);
        window.location.reload();
    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
};
