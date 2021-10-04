import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Developer.css'

const Developer = (props) => {
    // console.log(props.members);
    const {name, img, address, profession, age, salary} = props.members;
    return (
        <>

<div className="row">
  <div className="col">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Name: {name}</h5>
      <h5 className="card-title">Address: {address}</h5>
      <h5 className="card-title">Age: {age}</h5>
      <h5 className="card-title">Profession: {profession}</h5>
      <h5 className="card-title">Salary: {salary}</h5>
    </div>
    <button className="regular-btn"
    onClick={props.handleAddToCart}
    >Add To Cart</button>
        <div className="Social-icon">
        <a href=""><i className="fab fa-facebook-square"></i></a>
        <a href=""><i className="fab fa-twitter-square"></i></a>
        </div>
  </div>
</div>
</>
    )
}

 

export default Developer
