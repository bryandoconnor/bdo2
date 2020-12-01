import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Cards from '../Card/Card';

function Cart(props) {
  const taxCalc = Number(props.productPrice * .0685).toFixed(2);
  const totalCalc = (Number(props.productPrice) + Number(taxCalc)).toFixed(2);

  return (
    <div className="container-fluid p-0">

      <div className="row lg-margin">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center">
          <img src={props.productLogo} alt="Product Icon" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center">
          <div>
            <h3 className="lg-margin cart-title">{props.productName}</h3>
            <div className="lg-paragraph">
              <div>{props.description}</div>
              <div>{props.productIncludes1}</div>
              <div>{props.productIncludes2}</div>
              <div>{props.productIncludes3}</div>
            </div>
            <button className="cart-button" onClick={props.onClick1}>Clear Shopping Cart</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 text-center">
          <div>
            <h5 className="padding-20 cart-item-heading">{props.shortname}</h5>
            <div className="lg-paragraph sm-margin sm-padding">Qty: {props.quantity}</div>
            <div className="lg-paragraph sm-margin sm-padding">Price: ${props.productPrice.toFixed(2)}</div>
            <div className="lg-paragraph sm-margin sm-padding">Tax: ${taxCalc}</div>
            <hr className="hr mx-auto my-0"></hr>
            <div className="lg-paragraph sm-margin sm-padding">Total: ${totalCalc}</div>
            <Link to={props.linkUrl} target="_blank">
              <button className="btn success-btn orange-button md-button">Proceed to Checkout</button>
            </Link>
          </div>
        </div>

      </div>

      <hr className="hr" />

      <div className="row text-center">
        <div className="col-12 p-0">
          <h3 className="lg-margin lg-padding">Add an Item</h3>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div>
          <Cards {...props} />
        </div>

      </div>

    </div>
  );
}

export default Cart;
