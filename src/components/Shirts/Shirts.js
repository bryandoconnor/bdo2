import React from 'react';
import { Link } from 'react-router-dom';

function ShirtsHeading() {
  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="main-heading">I Eat at Ossie's Next-Gen T-shirts and Aprons!</h1>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12 col-lg-3 px-0 py-4 text-center">
          <div class="text-center">
            <Link to="mens-shirt-zazzle" target="_blank">
              <img src="https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113176653516639378&design=8d775995-843c-4ce7-af2e-bc46de3a9b27&style=aa_mens_crew_tshirt_2001&size=a_xs&color=navyblue&max_dim=325&bg=0xffffff" alt="Men's T-Shirt" />
            </Link>
          </div>

          <p className="xlg-paragraph lg-margin lg-padding">Men's</p>

          <Link to="mens-shirt-zazzle" target="_blank">
            <button className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
          </Link>

        </div>

        <div className="col-12 col-lg-3 px-0 py-4 text-center">
          <div class="text-center">
            <Link to="womens-shirt-zazzle" target="_blank">
              <img src="https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113524261791142453&design=cf8b8762-5250-4edb-b4b0-69593534eb80&style=ladies_fitted_tshirt&size=a_s&color=navy&max_dim=325&bg=0xffffff" alt="Women's T-Shirt" />
            </Link>
          </div>

          <p className="xlg-paragraph lg-margin lg-padding">Women's</p>

          <Link to="womens-shirt-zazzle" target="_blank">
            <button className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
          </Link>

        </div>

        <div className="col-12 col-lg-3 px-0 py-4 text-center">
          <div class="text-center">
            <Link to="kids-shirt-zazzle" target="_blank">
              <img src="https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113441499850799543&design=b168c175-8fa1-416e-bedc-d0a39b6047ce&style=hanes_boys_crew_tshirt_5450&size=y_xs&color=navy&max_dim=325&bg=0xffffff" alt="Kid's T-shirt" />
            </Link>
          </div>

          <p className="xlg-paragraph lg-margin lg-padding">Kid's</p>

          <Link to="kids-shirt-zazzle" target="_blank">
            <button className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
          </Link>

        </div>

        <div className="col-12 col-lg-3 px-0 py-4 text-center">
          <div class="text-center">
            <Link to="aprons-zazzle" target="_blank">
              <img src="https://www.zazzle.com/rlv/svc/view?rlvnet=1&realview=113094601405750483&design=94aac413-b04f-4c15-8bb7-c62f3960f163&style=long_apron&color=white&max_dim=325&bg=0xffffff" alt="Aprons" />
            </Link>
          </div>

          <p className="xlg-paragraph lg-margin lg-padding">Aprons</p>

          <Link to="aprons-zazzle" target="_blank">
            <button className="btn btn-success orange-button mx-auto my-0">Purchase Now</button>
          </Link>

        </div>

      </div>
    </div>
  );
}

function Shirts() {
  return (
    <div className="container-fluid p-0 mb-5">
      <ShirtsHeading/>
    </div>
  );
}

export default Shirts;
