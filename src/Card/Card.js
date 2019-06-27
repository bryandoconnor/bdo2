import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import '../bootstrap.min.css';

function Cards(props) {
  return (
    <div className="row">
      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <Link to="/Cart" className="card-link center">
          <div className="card">
            <div className="card-top" style={{
              backgroundColor: '#e12345',
              backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Branding-icon.svg)`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="card-body">
                <div className="card-title no-margin">
                  <h5>Marketing Package</h5>
                </div>
                <div className="card-text">
                  <p className="auto-margin card-padding center">Professional Brand & Marketing Solutions!</p>
                  <ul>
                    <li>Logo Design</li>
                    <li>Business Card Design</li>
                    <li>Style Guide</li>
                  </ul>
                  <div className="center">
                    <button className="btn btn-success orange-button card-button" onClick={props.onClick2}>Fast Checkout</button>
                  </div>
                </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <Link to="/Cart" className="card-link center">
          <div className="card">
            <div className="card-top" style={{
              backgroundColor: '#ae3ae3',
              backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Logos-icon.svg)`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="card-body">
                <div className="card-title no-margin">
                  <h5>Logo Design</h5>
                </div>
                <div className="card-text">
                  <p className="auto-margin card-padding center">Outstanding Logo Creation and Design!</p>
                  <ul>
                    <li>Vector files</li>
                    <li>Professional look</li>
                    <li>Refresh or recreate a logo</li>
                  </ul>
                  <div className="center">
                    <button className="btn btn-success orange-button card-button" onClick={props.onClick3} >Fast Checkout</button>
                  </div>
                </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <Link to="/Cart" className="card-link center">
          <div className="card">
            <div className="card-top" style={{
              backgroundColor: '#d45622',
              backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/BusinessCards-icon.svg)`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}></div>
            <div className="card-body">
                <div className="card-title no-margin">
                  <h5>Business Card Design</h5>
                </div>
                <div className="card-text">
                  <p className="auto-margin card-padding center">Expert Business Card Layout & Design!</p>
                  <ul>
                    <li>Print-ready files</li>
                    <li>Professional templates</li>
                    <li>Fast service</li>
                  </ul>
                  <div className="center">
                    <button className="btn btn-success orange-button card-button" onClick={props.onClick4}>Fast Checkout</button>
                  </div>
                </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
