import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsRows.css';
import '../../bootstrap.min.css';
import '../../index.css';
import products_and_services from './Products_and_Services';

function ProductsRows(props) {
  const productRows = products_and_services.map((res) =>
    <div className="row m-0" style={{backgroundColor:res.productColor}} id={res.productName} key={res.productId}>
      <div className="col-sm-4 col-xs-12 products-column p-0"
        style={{
          backgroundImage: `url(` + res.productLogo + `)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'}}>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 text-center products-column2">
        <h3 className="products-heading">{res.productName}</h3>
        <p className="products-paragraph lg-margin lg-padding">{res.productRowHeader}</p>
        <div className="products-paragraph lg-margin lg-padding">
          <div>{res.productIncludes1}</div>
          <div>{res.productIncludes2}</div>
          <div>{res.productIncludes3}</div>
        </div>
        <Link to='/cart'>
          <button className="btn btn-success orange-button md-button" id={res.productName} onClick={props.onClickEvent}>{res.productButtonText1} | {res.productPrice}</button>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      {productRows}
    </div>
  );
}

export default ProductsRows;
