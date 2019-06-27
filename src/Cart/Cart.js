import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Cards from '../Card/Card';

function Cart(props) {
  return (
    <div className="container-fluid no-padding">

      <div className="row lg-margin">
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 center">
          <img src={props.imageUrl} alt="Product Icon" />
        </div>

        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 center">
          <div>
            <h3 className="lg-margin lg-padding">{props.name}</h3>
            <div className="lg-paragraph">
              <div>{props.description}</div>
              <div>{props.check1}</div>
              <div>{props.check2}</div>
              <div>{props.check3}</div>
            </div>
            <button className="cart-button" onClick={props.onClick1}>Clear Shopping Cart</button>
          </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12 center">
          <div>
            <h5 className="padding-20 cart-item-heading">{props.shortname}</h5>
            <div className="lg-paragraph sm-margin sm-padding">Qty: {props.quantity}</div>
            <div className="lg-paragraph sm-margin sm-padding">Price: ${props.price}</div>
            <div className="lg-paragraph sm-margin sm-padding">Tax: ${props.tax}</div>
            <hr className="hr auto-margin"></hr>
            <div className="lg-paragraph sm-margin sm-padding">Total: ${props.total}</div>
            <Link to={props.linkUrl} target="_blank">
              <button className="btn success-btn orange-button md-button">Proceed to Checkout</button>
            </Link>
          </div>
        </div>

      </div>

      <hr className="hr" />

      <div className="row center">
        <div className="col-12">
          <h3 className="lg-margin lg-padding">Add an Item</h3>
        </div>
      </div>
      <div className="container-fluid no-padding">
        <div>
          <Cards {...props} />
        </div>

      </div>

    </div>
  );
}

export default Cart;
