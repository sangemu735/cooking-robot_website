export const addToCart = (product, quantity) => (dispatch, getState) => {
    var cartItem = {
        name: product.name,
        _id: product._id,
        img: product.img,
        quantity: Number(quantity),
        price: product.price,
        prices: product.price * quantity,
    };

    if (cartItem.quantity > 10) {
        alert("You cannot add more than 10 quantities");
    } else {
        if (cartItem.quantity < 1) {
            dispatch({ type: "DELETE_FROM_CART", payload: product });
        } else {
            dispatch({ type: "ADD_TO_CART", payload: cartItem });
        }
    }

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const deleteFromCart = (product) => (dispatch, getState) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
};
