import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products, setproducts]=useState([])
    const[cart,setCart]=useState([]);
   

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    }, [])
    const clickHandler=(product)=>{
        console.log(product)
        const newCart=[...cart,product];// copy the previous cart array
        setCart(newCart);
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product=><Product
                         key={product.id}
                         product={product}
                         handleAddToCart={clickHandler}
                         >

                         </Product>)
                }
            </div>
            <div className="cart-container">
            <h1>this is cart</h1>
            <p>product :{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;