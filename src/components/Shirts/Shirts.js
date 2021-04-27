import React from 'react';
import { Link } from 'react-router-dom';

function ShirtsHeading() {
  return (
    <div>
      <div className="ShirtsHero"></div>
      <div className="d-block row text-center">
        <div className="col-12 p-0 text-center">
          <h1 className="main-heading">I Eat at Ossie's Next-Gen T-shirts!</h1>
          <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/T-shirt.jpeg" alt="I Eat at Ossie's T-shirt" />
          <p className="xlg-paragraph lg-margin lg-padding">Buy Yours Today!!</p>
          <Link to="shirts-pp" target="_blank">
            <button className="btn btn-success orange-button card-button mx-auto my-0">Purchase Now | $19.99</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Shirts() {
  return (
    <div className="container-fluid p-0 mb-5">
      <ShirtsHeading/>
    </div>
  );
}

export default Shirts;
