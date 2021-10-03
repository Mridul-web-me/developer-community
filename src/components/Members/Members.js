import React, {useEffect, useState} from 'react';
import Developer from '../Developers/Developer';

// import Cart from '../Cart/Cart';
import './Members.css';

const Members = () => {
    const [developers, setMembers] = useState ([]);

    useEffect(() => {
        fetch ('./members.JSON')
        .then(res => res.json())
        .then(data => setMembers(data))
    });
     
return (
    <div className="container">
       <div className="members-container">
           <h3>members: {developers.length}</h3>
           {
               developers.map(developer => <Developer developer= {developer}></Developer> )
           }
           
       </div>
       <div className="cart-container">
           <h3>Items Order</h3>
           <h4>Total: </h4>
       </div>
    </div>
);
};
export default Members;