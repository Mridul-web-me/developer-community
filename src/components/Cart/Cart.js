import React from "react";
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    for (const member of cart){
        total = total + member.price * member.quantity;
        totalQuantity = totalQuantity + member.quantity;
    }

    <div>
        <h5>Player added: {totalQuantity}</h5>
        <h5>Total: {total} </h5>
    </div>
};

export default Cart