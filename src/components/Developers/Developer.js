import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Developer.css'
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Developer = (props) => {
    console.log(props.developer);
    return (
        <>
<Row xs={1} md={3} className="g-4">
  {Array.from({ length: 3 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img  src={props.developer.img} />
        <Card.Body>
          <h5>Name: {props.developer.name} </h5>
          <h5>Address: {props.developer.address} </h5>
          <h5>Age: {props.developer.age} </h5>
          <h5>Profession: {props.developer.profession} </h5>
          <h5>Salary: {props.developer.salary} </h5>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

{/* <div class="row">
  <div class="col">
    <img src={props.developer.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Name: {props.developer.name}</h5>
      <h5 class="card-title">Address: {props.developer.address}</h5>
      <h5 class="card-title">Age: {props.developer.age}</h5>
      <h5 class="card-title">Profession: {props.developer.profession}</h5>
      <h5 class="card-title">Salary: {props.developer.salary}</h5>
     
    </div>
  </div>
</div> */}
</>
    )
}

 

export default Developer
