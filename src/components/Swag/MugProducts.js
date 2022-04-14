import React from 'react';

function MugProducts() {
	const neverGiveUpMug = "https://www.zazzle.com/never_give_up_mug-168290438334133454";
	const neverGiveUpMugImg = "https://rlv.zcache.com/never_give_up_mug-r039d07b2c4fe45f4a21e2f50c00da5e5_x7jg9_8byvr_1024.jpg?max_dim=325&bg=0xffffff";
	const doneRightMug = "https://www.zazzle.com/a_job_worth_doin_mug-168064899396292397";
	const doneRightMugImg = "https://rlv.zcache.com/a_job_worth_doin_mug-rb724b21ae5a8426498c1aba218caa55a_x76iu_8byvr_1024.jpg?max_dim=325&bg=0xffffff";
	const dragonWreathMug = "https://www.zazzle.com/dragon_wreath_mug-168772340050709168";
	const dragonWreathMugImg = "https://rlv.zcache.com/dragon_wreath_mug-r7bf972e483fc46c9825a01293ecdc136_x7jg9_8byvr_1024.jpg?max_dim=325&bg=0xffffff";
	const gritMug = "https://www.zazzle.com/grit_mug-168204481718969624";
	const gritMugImg = "https://rlv.zcache.com/grit_mug-r88a5143400674d139b3c05b50b350408_x7jg9_8byvr_1024.jpg?max_dim=325&bg=0xffffff";

	return(
		<div className="row text-center">
			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={neverGiveUpMug} target="_blank" rel="noreferrer">
						<img src={neverGiveUpMugImg} alt="Never Give Up Mug" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Never Give Up Mug</p>

				<a href={neverGiveUpMug} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={doneRightMug} target="_blank" rel="noreferrer">
						<img src={doneRightMugImg} alt="Done Right Mug" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Done Right Mug</p>

				<a href={doneRightMug} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={dragonWreathMug} target="_blank" rel="noreferrer">
						<img src={dragonWreathMugImg} alt="Dragon Wreath Mug" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">Dragon Wreath Mug</p>

				<a href={dragonWreathMug} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>
			</div>

			<div className="col-12 col-lg-3 px-0 py-4 text-center">
				<div className="text-center">
					<a href={gritMug} target="_blank" rel="noreferrer">
						<img src={gritMugImg} alt="Grit Mug" />
					</a>
				</div>

				<p className="xlg-paragraph lg-margin lg-padding">GRIT Mug</p>

				<a href={gritMug} target="_blank" rel="noreferrer">
					<button type="button" className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
				</a>

			</div>
		</div>
	);
}

export default MugProducts;