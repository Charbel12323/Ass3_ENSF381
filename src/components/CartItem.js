import React from 'react';

function CartItem({ item, updateCart }) {
    const handleRemove = () => {
        updateCart(item.id, -1);
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>{item.name}</div>
            <div>${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Total: ${item.price * item.quantity}</div>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
}

export default CartItem;
