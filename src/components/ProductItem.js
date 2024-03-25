import React, { useState } from 'react';
import './css/ProductItem.css';


function ProductItem({ product, addToCart }) {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <div
                className="product-name"
                onMouseEnter={() => setShowDescription(true)}
                onMouseLeave={() => setShowDescription(false)}
            >
                {product.name}
            </div>
            {showDescription && <div className="product-description">{product.description}</div>}
            <div className="product-price">${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;
