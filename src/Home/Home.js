import React from 'react';
import { Link } from 'react-router-dom';
import '../Extras/Heroes.css';
import '../bootstrap.min.css';
import '../index.css';

function HomeHeading() {
  return (
    <div>
      <div className="IndexHero"></div>
      <div className="row text-center">
        <h1 className="main-heading">Stand Out with Outstanding Design!</h1>
        <p className="xlg-paragraph lg-margin lg-padding">This website is dedicated to my art. I've been drawing and designing for as long as I can remember! I've seen art change people and help them to reach their goals and achieve their dreams.</p>
        <p className="xlg-paragraph lg-margin lg-padding">Art transcends the barriers of the human race in a unique way. Language, culture, race, sex, religion, and other things that separate us are lost. Art is a connection. A reference point where we can be united. It is a light in the darkness.</p>
      </div>
    </div>
  );
}

function HomeContent() {
  return(
    <div>
      <div className="text-center">
        <Link to="/products">
          <button className="lg-button orange-button lg-margin lg-padding">Get My Custom Design!</button>
        </Link>
      </div>

      <div className="links-div">

        <div className="mx-auto my-0 row w-75">

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
            <h3 className="link-heading mx-auto my-0">Products</h3>
            <Link to="/products" className="d-inline-block product-link">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Sword-icon.svg" className="mx-auto my-0 link-icon w-100" alt="" />
            </Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
            <h3 className="link-heading mx-auto my-0">Gallery</h3>
            <Link to="/gallery" className="d-inline-block product-link">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/CrystalBall-icon.svg" className="mx-auto my-0 link-icon w-100" alt="" />
            </Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 text-center">
            <h3 className="link-heading mx-auto my-0">About</h3>
            <Link to="/about" className="d-inline-block product-link">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Potion-icon.svg" className="mx-auto my-0 link-icon w-100" alt="" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container-fluid p-0">
      <HomeHeading />
      <HomeContent />
    </div>
  );
}

export default Home;
