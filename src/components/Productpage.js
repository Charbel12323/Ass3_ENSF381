import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';

function ProductPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        const newCart = [...cart];
        const cartItem = newCart.find(item => item.id === product.id);

        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            newCart.push({ ...product, quantity: 1 });
        }

        setCart(newCart);
    };

    const updateCart = (productId, quantityChange) => {
        const newCart = cart.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: item.quantity + quantityChange };
            }
            return item;
        }).filter(item => item.quantity > 0);

        setCart(newCart);
    };

    return (
        <div className="product-page">
            <Header />
            <table>
                <tr>
                    <td><ProductList addToCart={addToCart} /></td>
                    <td style={{ verticalAlign: 'top' }}><Cart cart={cart} updateCart={updateCart} /></td>
                </tr>
            </table>
            <Footer />
        </div>
    );
}

export default ProductPage;
