import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {cart}=props;
  //console.log(cart)

  let total=0; // initial
  let shipping=0;
  let quantity=0;
  for(const product of cart){
    quantity=quantity+product.quantity;
    total=total+product.price *product.quantity;
    shipping=shipping+product.shipping
  }
  const tax =(total*0.1).toFixed(2);
  const grandTotal= total+shipping+parseFloat(tax);

    return (
        <div className='cart'>
           < h1>Order Summary</h1>
            <p>product :{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;