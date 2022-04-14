/* eslint-disable react/no-unescaped-entities */
import React from 'react';

function ChristianProducts() {
	const lilliesMensShirt = "https://www.zazzle.com/consider_the_lilies_cross_mens_black_t_shirt-235974912798412078";
	const lilliesMensShirtImg = "https://rlv.zcache.com/consider_the_lilies_cross_mens_black_t_shirt-rb37097c888e04900863d69ea781a0a01_k2ggc_1024.jpg?max_dim=325&bg=0xffffff";
	const lilliesWomensShirt = "https://www.zazzle.com/consider_the_lilies_cross_womens_black_t_shirt-235910854397781281";
	const lilliesWomensShirtImg = "https://rlv.zcache.com/consider_the_lilies_cross_womens_black_t_shirt-r835ee065a0a943178879c12ce462fa0d_k2gl9_1024.jpg?max_dim=325&bg=0xffffff";
	const afraidMensShirt = "https://www.zazzle.com/be_not_afraid_wings_mens_black_t_shirt-235640684584076550";
	const afraidMensShirtImg = "https://rlv.zcache.com/be_not_afraid_wings_mens_black_t_shirt-rc21ae688abcf4c30a299fa85a1418286_k2ggc_1024.jpg?max_dim=325&bg=0xffffff";
	const afraidWomensShirt = "https://www.zazzle.com/be_not_afraid_wings_womens_black_t_shirt-235276667109904535";
	const afraidWomensShirtImg = "https://rlv.zcache.com/be_not_afraid_wings_womens_black_t_shirt-r99c0495eaf384b5fbf56b01fffdd3b7f_k2gl9_1024.jpg?max_dim=325&bg=0xffffff";

	return(
		<div className="row text-center">
			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={lilliesMensShirt} target="_blank" rel="noreferrer">
						<img src={lilliesMensShirtImg} alt="Consider the Lilies Cross Men's T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Men's Consider the Lilies T</p>

				<a href={lilliesMensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={lilliesWomensShirt} target="_blank" rel="noreferrer">
						<img src={lilliesWomensShirtImg} alt="Consider the Lilies Cross Women's T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Women's Consider the Lilies T</p>

				<a href={lilliesWomensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={afraidMensShirt} target="_blank" rel="noreferrer">
						<img src={afraidMensShirtImg} alt="Be Not Afraid Wings Men's T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Men's Be Not Afraid T</p>

				<a href={afraidMensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={afraidWomensShirt} target="_blank" rel="noreferrer">
						<img src={afraidWomensShirtImg} alt="Be Not Afraid Wings Women's T-Shirt" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Women's Be Not Afraid T</p>

				<a href={afraidWomensShirt} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>
		</div>
	);
}

export default ChristianProducts;