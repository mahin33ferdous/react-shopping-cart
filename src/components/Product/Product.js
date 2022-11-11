import React from 'react';
import './Product.css'

const Product = (props) => {
    const{name,img,seller,ratings,price}=props.product
    const{handleAddToCart,product}=props
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price: {price}$</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button onClick={()=>handleAddToCart(product)}  className='button-cart'>
                <p> Add To Cart</p>
            </button>
        </div>
    );
};

export default Product;