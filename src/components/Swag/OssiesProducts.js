/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function OssiesProducts() {
	const ossiesMensShirt = "https://www.zazzle.com/i_eat_at_ossies_mens_t_shirt-235733169565141432";
	const ossiesMensShirtImg = "https://rlv.zcache.com/i_eat_at_ossies_mens_t_shirt-r9f6356ad6754421d9fde53f6a4e469a2_k2gpz_1024.jpg?max_dim=325&bg=0xffffff";
	const ossiesWomensShirt = "https://www.zazzle.com/i_eat_at_ossies_womens_t_shirt-235003222720023867";
	const ossiesWomensShirtImg = "https://rlv.zcache.com/i_eat_at_ossies_womens_t_shirt-ra9ce0ed7f3af47dd9fd0134348aedb1e_k2gpy_1024.jpg?max_dim=325&bg=0xffffff";
	const ossiesKidsShirt = "https://www.zazzle.com/i_eat_at_ossies_kids_t_shirt-235149394548698012";
	const ossiesKidsShirtImg = "https://rlv.zcache.com/i_eat_at_ossies_kids_t_shirt-rc79345e6c7014715ba605e5333e1830b_65g47_1024.jpg?max_dim=325&bg=0xffffff";
	const ossiesApron = "https://www.zazzle.com/i_eat_at_ossies_apron-154873931354488868";
	const ossiesApronImg = "https://rlv.zcache.com/i_eat_at_ossies_apron-rbdfe62f775d2430e843e35371a2af4b8_v9wta_8byvr_1024.jpg?max_dim=325&bg=0xffffff";

	return(
		<div className="row text-center">
			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={ossiesMensShirt} target="_blank" rel="noreferrer">
						<img src={ossiesMensShirtImg} alt="Men's I Eat at Ossie's T-shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Men's I Eat at Ossie's T</p>

				<a href={ossiesMensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={ossiesWomensShirt} target="_blank" rel="noreferrer">
						<img src={ossiesWomensShirtImg} alt="Women's I Eat at Ossie's T-shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Women's I Eat at Ossie's T</p>

				<a href={ossiesWomensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>

			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={ossiesKidsShirt} target="_blank" rel="noreferrer">
						<img src={ossiesKidsShirtImg} alt="Kid's I Eat at Ossie's T-shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Kid's I Eat at Ossie's T</p>

				<a href={ossiesKidsShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>

			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={ossiesApron} target="_blank" rel="noreferrer">
						<img src={ossiesApronImg} alt="I Eat at Ossie's Aprons" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">I Eat at Ossie's Aprons</p>

				<a href={ossiesApron} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>
		</div>
	);
}

export default OssiesProducts;