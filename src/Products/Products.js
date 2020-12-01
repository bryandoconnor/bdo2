import React from 'react';
import ProductsRows from './ProductsRows';
import Cards from '../Card/Card';
import '../Card/Card.css';
import '../Extras/Heroes.css';
import '../bootstrap.min.css';

function ProductsHeading() {
  return (
    <div>
      <div className="ProductsHero"></div>
      <div className="row text-center">
        <div className="col-12 p-0 text-center">
          <h1 className="main-heading">Products</h1>
        </div>
      </div>
    </div>
  );
}

function Products(props) {
  return (
    <div className="container-fluid p-0">
      <ProductsHeading />
      <Cards {...props} />
      <ProductsRows {...props} />
    </div>
  );
}

export default Products;
