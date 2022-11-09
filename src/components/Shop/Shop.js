import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products, setproducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    }, [])
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product=><Product></Product>)
                }
            </div>
            <div className="cart-container">
            <h1>this is cart</h1>
            </div>
        </div>
    );
};

export default Shop;