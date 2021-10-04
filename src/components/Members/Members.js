import React, {useEffect, useState} from 'react';
import Developer from '../Developers/Developer';
import Cart from '../Cart/Cart';
import './Members.css';


const Members = () => {
    
    const [cart, setCart] = useState ([]);
    const [members, setMembers] = useState ([]);

    useEffect(() => {
        fetch ('./members.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    });
     const handleAddToCart = (members) => {
        //  console.log(members);
         const newCart = [...cart, members]
         setCart(newCart);

         
     }
return (
    <div className="container">
       <div className="members-container">
           <h3>members: {members.length}</h3>
           {
               members.map(members => <Developer members= {members}
                   key = {members.key}
                   members={members}
                   handleAddToCart = {handleAddToCart }
                   >
               </Developer> )
           }
           
       </div>
       <div className="cart-container">
           <Cart cart={cart}></Cart>
       </div>
    </div>
);
};
export default Members;