/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ChristianProducts from './ChristianProducts';
import MugProducts from './MugProducts';
import GritProducts from './GritProducts';
import OssiesProducts from './OssiesProducts';

function ShirtsHeading() {
	return (
		<div className="row">
			<div className="col-12 text-center">
				<h1 className="main-heading">Swag</h1>
			</div>
		</div>
	);
}

function Swag() {
	return (
		<div className="container-fluid p-0 mb-5">
			<ShirtsHeading/>
			<ChristianProducts />
			<MugProducts />
			<GritProducts />
			<OssiesProducts />
		</div>
	);
}

export default Swag;
