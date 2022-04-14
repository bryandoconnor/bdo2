/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function GritProducts() {
	const gritMensShirt = "https://www.zazzle.com/grit_mens_white_t_shirt-235114754514561848";
	const gritMensShirtImg = "https://rlv.zcache.com/grit_mens_white_t_shirt-r70dc50578dce480882d707cac5c9ca05_k2g1o_1024.jpg?max_dim=325&bg=0xffffff";
	const gritMensShirtBlack = "https://www.zazzle.com/grit_mens_black_t_shirt-235411528238884380";
	const gritMensShirtBlackImg = "https://rlv.zcache.com/grit_mens_black_t_shirt-r89dc88d3bf55424b9c220550f5a802ae_k2ggc_1024.jpg?max_dim=325&bg=0xffffff";
	const gritWomensShirt = "https://www.zazzle.com/grit_womens_white_t_shirt-235313079401115954";
	const gritWomensShirtImg = "https://rlv.zcache.com/grit_womens_white_t_shirt-rca4d1298a97f4e928945505c6452be35_k2glg_1024.jpg?max_dim=325&bg=0xffffff";
	const gritWomensShirtBlack = "https://www.zazzle.com/grit_womens_black_t_shirt-235670526377860667";
	const gritWomensShirtBlackImg = "https://rlv.zcache.com/grit_womens_black_t_shirt-r646efe78db2e449289d2ec543b1e0737_k2gl9_1024.jpg?max_dim=325&bg=0xffffff";

	return(
		<div className="row text-center">
			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={gritMensShirtBlack} target="_blank" rel="noreferrer">
						<img src={gritMensShirtBlackImg} alt="GRIT Men's Black T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Men's GRIT Black T</p>

				<a href={gritMensShirtBlack} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={gritMensShirt} target="_blank" rel="noreferrer">
						<img src={gritMensShirtImg} alt="GRIT Men's White T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Men's GRIT White T</p>

				<a href={gritMensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={gritWomensShirtBlack} target="_blank" rel="noreferrer">
						<img src={gritWomensShirtBlackImg} alt="GRIT Women's Black T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Women's GRIT Black T</p>

				<a href={gritWomensShirtBlack} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={gritWomensShirt} target="_blank" rel="noreferrer">
						<img src={gritWomensShirtImg} alt="GRIT Women's White T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Women's GRIT White T</p>

				<a href={gritWomensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>
		</div>
	);
}

export default GritProducts;