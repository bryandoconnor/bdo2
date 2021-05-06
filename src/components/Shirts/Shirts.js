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
              <img src="https://rlv.zcache.com/i_eat_at_ossies_mens_t_shirt-r9f6356ad6754421d9fde53f6a4e469a2_k2gpz_1024.jpg?max_dim=325&bg=0xffffff" alt="Men's T-Shirt" />
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
              <img src="https://rlv.zcache.com/i_eat_at_ossies_womens_t_shirt-ra9ce0ed7f3af47dd9fd0134348aedb1e_k2gpy_1024.jpg?max_dim=325&bg=0xffffff" alt="Women's T-Shirt" />
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
              <img src="https://rlv.zcache.com/i_eat_at_ossies_kids_t_shirt-rc79345e6c7014715ba605e5333e1830b_65g47_1024.jpg?max_dim=325&bg=0xffffff" alt="Kid's T-shirt" />
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
              <img src="https://rlv.zcache.com/i_eat_at_ossies_apron-rbdfe62f775d2430e843e35371a2af4b8_v9wta_8byvr_1024.jpg?max_dim=325&bg=0xffffff" alt="Aprons" />
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
