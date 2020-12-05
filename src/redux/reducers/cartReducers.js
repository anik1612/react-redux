const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart: [],
    products: [{
        name: 'Lenovo laptop',
        id: '1'
    },
    {
        name: 'Hp laptop',
        id: '2'
    },
    {
        name: 'Dell laptop',
        id: '3'
    },
    {
        name: 'Samsung laptop',
        id: '4'
    },
    {
        name: 'Asus laptop',
        id: '5'
    }]
}

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const newCart = [...state.cart, action.id]
            return { ...state, cart: newCart }
        case REMOVE_FROM_CART:
            const remainingCart = state.cart.filter(item => item !== action.id);
            return { ...state, cart: remainingCart }
        default:
            return state;
    }
}

export default cartReducers;