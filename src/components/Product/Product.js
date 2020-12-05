import React from 'react';

const Product = (props) => {
    const { addToCart, product } = props;
    return (
        <div>
            <h5>{product.name}</h5>
            <button
                onClick={() => addToCart(product.id)}
            >
                Add to cart
            </button>
        </div>
    );
};

export default Product;