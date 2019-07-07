import React from 'react';
import { Link } from 'react-router-dom';
import '../Extras/Heroes.css';
import '../bootstrap.min.css';
import '../index.css';

function HomeHeading() {
  return (
    <div>
      <div className="IndexHero"></div>
      <div className="row center">
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
      <div className="center">
        <Link to="/products">
          <button className="lg-button orange-button lg-margin lg-padding">Get My Custom Design!</button>
        </Link>
      </div>

      <div className="links-div">

        <div className="links-container row auto-margin">

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 center">
            <h3 className="link-heading">Products</h3>
            <Link to="/products" className="product-link">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Sword-icon.svg" className="link-icon" alt="" />
            </Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 center">
            <h3 className="link-heading">Gallery</h3>
            <Link to="/gallery" className="product-link">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/CrystalBall-icon.svg" className="link-icon" alt="" />
            </Link>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 center">
            <h3 className="link-heading">About</h3>
            <Link to="/about" className="product-link">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Potion-icon.svg" className="link-icon" alt="" />
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="container-fluid no-padding">
      <HomeHeading />
      <HomeContent />
    </div>
  );
}

export default Home;
