import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsRows.css';
import '../bootstrap.min.css';
import '../index.css';

function ProductsRows(props) {
  return (
    <div>
      <div className="row" style={{backgroundColor:"#e12345"}} id="first">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 products-column"
        style={{
          backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Branding-icon.svg)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'}}></div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 center products-column2">
          <h3 className="products-heading">Marketing Package</h3>
          <p className="products-paragraph lg-margin lg-padding">My standard marketing package includes logo design, business card design, envelope layout, letterhead design, stock photos & a 10 page style guide!</p>
          <div className="products-paragraph lg-margin lg-padding">
            <div>✓ Logo Design</div>
            <div>✓ Business Card Design</div>
            <div>✓ Style Guide</div>
          </div>
          <Link to='/products'>
            <button className="btn btn-success orange-button md-button" onClick={props.onClick2}>Add to Cart | $1424.99</button>
          </Link>
        </div>
      </div>
      <div className="row" style={{backgroundColor:"#ae3ae3"}} id="second">
        <div className="col-sm-12 col-xs-12 products-column d-block d-md-none"
        style={{
          backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Logos-icon.svg)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'}}></div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 center products-column2">
          <h3 className="products-heading">Logo Design</h3>
          <p className="products-paragraph lg-margin lg-padding">Logo design includes 4 logo versions. 10 thumbnails, 2 revisions, 3 roughs, and 1 final world-class logo!</p>
          <div className="products-paragraph lg-margin lg-padding">
            <div>✓ Vector file formats</div>
            <div>✓ Quality fonts</div>
            <div>✓ Traditional or modern styles</div>
          </div>
          <Link to='/products'>
            <button className="btn btn-success orange-button md-button" onClick={props.onClick3}>Add to Cart | $274.99</button>
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 products-column d-none d-md-block"
        style={{
          backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Logos-icon.svg)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'}}></div>
      </div>
      <div className="row" style={{backgroundColor:"#d45622"}} id="third">
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 products-column"
        style={{
          backgroundImage: `url(https://bryandoconnor.s3-us-west-2.amazonaws.com/images/BusinessCards-icon.svg)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'}}></div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 center products-column2">
          <h3 className="products-heading">Business Card Design</h3>
          <p className="products-paragraph lg-margin lg-padding">Your business card design includes 3 layout roughs, one final layout and file formats for future use (print and vector).</p>
          <div className="products-paragraph lg-margin lg-padding">
            <div>✓ Industry best practices</div>
            <div>✓ Company templates</div>
            <div>✓ Quick turnaround time</div>
          </div>
          <Link to='/products'>
            <button className="btn btn-success orange-button md-button" onClick={props.onClick4}>Add to Cart | $189.99</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductsRows;
