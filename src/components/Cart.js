import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, updateCart }) {
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.map(item => (
                <CartItem key={item.id} item={item} updateCart={updateCart} />
            ))}
            <div>Total Price: ${getTotalPrice()}</div>
        </div>
    );
}

export default Cart;
