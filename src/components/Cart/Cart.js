import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div>
            <h4>This is cart</h4>
            <ul>
                {
                    cart.map(id =>
                        <li>
                            {id}
                            <button
                                onClick={() => removeFromCart(id)}
                            >
                                X
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);