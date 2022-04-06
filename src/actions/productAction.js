import axios from "axios";

export const getAllProducts = () => async (dispatch) => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" });

    try {
        const response = await axios.get("https://cooking-robot-api.herokuapp.com/api/products/getallproducts");
        console.log(response);
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: error });
    }
};

export const getProductById = (productId) => async (dispatch) => {
    dispatch({ type: "GET_PRODUCT_ID_REQUEST" });

    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/products/getproductbyid", {
            productId,
        });
        console.log(response);
        dispatch({ type: "GET_PRODUCT_ID_SUCCESS", payload: response.data });
    } catch (error) {
        dispatch({ type: "GET_PRODUCT_ID_FAILED", payload: error });
    }
};

export const filterProducts = (searchKey) => async (dispatch) => {
    var filteredProducts;
    dispatch({ type: "GET_PRODUCTS_REQUEST" });
    try {
        const response = await axios.get("https://cooking-robot-api.herokuapp.com/api/products/getallproducts");
        filteredProducts = response.data.filter((product) => product.name.toLowerCase().includes(searchKey));
        dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: filteredProducts });
    } catch (error) {
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: error });
    }
};

export const addProduct = (product) => async (dispatch) => {
    dispatch({ type: "ADD_PRODUCT_REQUEST" });

    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/products/addproduct", {
            product,
        });
        console.log(response);
        dispatch({ type: "ADD_PRODUCT_SUCCESS" });
    } catch (error) {
        dispatch({ type: "ADD_PRODUCT_FAILED", payload: error });
    }
};

export const editProduct = (editedProduct) => async (dispatch) => {
    dispatch({ type: "EDIT_PRODUCT_REQUEST" });

    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/products/editproduct", {
            editedProduct,
        });
        console.log(response);
        dispatch({ type: "EDIT_PRODUCT_SUCCESS", payload: response.data });
        window.location.href = process.env.PUBLIC_URL + "/admin/productslist";
    } catch (error) {
        dispatch({ type: "EDIT_PRODUCT_FAILED", payload: error });
    }
};

export const deleteProduct = (productId) => async (dispatch) => {
    try {
        const response = await axios.post("https://cooking-robot-api.herokuapp.com/api/products/deleteproduct", {
            productId,
        });
        alert("Product delete successfully");
        console.log(response);
        window.location.reload();
    } catch (error) {
        alert("Something went wrong");
        console.log(error);
    }
};
