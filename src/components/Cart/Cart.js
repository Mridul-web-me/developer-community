import React from "react";
import './Cart.css';

const Cart = (props) => {
   console.log(props);
    const {cart} = props || {};
    let total = 0;
    for(const members of cart){
        total = total + members.salary;
    }

        return(
    <div>
        <h3>Items Order</h3>
        <h5>Total: {props.cart.length} </h5>
       <h5>Total Amount: {total} </h5>
       <ul>
       {
           cart.map(props => <li className='fw-bold'>{props.name}</li>)
       }
       </ul>
    </div>
    )
};


export default Cart;