/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Link } from 'react-router-dom';
import ProductsRows from './ProductsRows';
import Cards from '../Card/Card';
import '../Card/Card.css';
import '../Extras/Heroes.css';

function ProductsHeading() {
	return (
		<div>
			<div className="ProductsHero" />
			<div className="d-block row text-center">
				<div className="col-12 p-0 text-center">
					<h1 className="main-heading">Products</h1>
				</div>
			</div>
		</div>
	);
}

function ProductsBanner() {
	return (
		<div>
			<div className="d-block row text-center bg-primary py-5 text-white mb-3">
				<h2 className="products-heading">Gear N Stuff</h2>
				<p>Click the button below to visit my store!</p>
				<Link to="/swag">
					<button type="button" className="btn btn-success orange-button">Swag</button>
				</Link>
			</div>
		</div>
	);
}

function Products(props) {
	return (
		<div className="container-fluid p-0">
			<ProductsHeading />
			<ProductsBanner />
			<Cards {...props} />
			<ProductsRows {...props} />
		</div>
	);
}

export default Products;
