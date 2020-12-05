import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/actions/cartActions'
import { connect } from 'react-redux';

const Shop = (props) => {
    const { products, addToCart } = props

    return (
        <div>
            {
                products.map(product => <Product
                    product={product}
                    key={product.id}
                    addToCart={addToCart}
                />)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart,
        products: state.products
    }
}

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);