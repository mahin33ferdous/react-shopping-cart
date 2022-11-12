import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const[products, setproducts]=useState([])
    const[cart,setCart]=useState([]);
   

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setproducts(data))
    }, []);

    useEffect (()=>{
         const storedCart=getStoredCart();
         const savedCart=[];
         //console.log(storedCart)
         for (const id in storedCart) 
         {
            const addedProducts=products.find(product=>product.id===id)
            if(addedProducts)
            {
                const quantity = storedCart[id]
                addedProducts.quantity=quantity;
                savedCart.push(addedProducts);
            }
           // console.log(addedProducts)
         }
         setCart(savedCart);
    },[products])
    const clickHandler=(selectedProduct)=>{
       // console.log(product)
       let newCart=[];
       const exists=cart.find(product=>product.id===selectedProduct.id);
       if(!exists){
        selectedProduct.quantity=1;
        newCart=[...cart,selectedProduct];// copy the previous cart array
       }
       else {
             const rest=cart.filter(product=>product.id!==selectedProduct.id);
             exists.quantity=exists.quantity+1;
             newCart=[...rest,exists]
       }

        
        setCart(newCart);
        addToDb(selectedProduct.id);
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
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;