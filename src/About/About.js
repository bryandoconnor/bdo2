import React from 'react';
import { Link } from 'react-router-dom';
import '../Extras/Heroes.css';
import '../index.css';

function AboutHeading() {
  return (
    <div>
      <div className="AboutHero"></div>
      <div className="row center">
        <div className="col-12 center">
          <h1 className="main-heading">About the Artist</h1>
          <p className="xlg-paragraph lg-margin lg-padding">I've been working as a professional designer and developer for over 13 years. My clients have ranged from small businesses and individuals to large international corporations. I've created thousands of design products for hundreds of companies. This includes branding packages, logos, web sites, illustrations, business cards, wedding invitations, and so much more!</p>
          <p className="xlg-paragraph lg-margin lg-padding">I love using my skills to help people! Design is not just a passion for me, it is a way of thinking and living. My formal education includes a Bachelors degree in Media Arts and Animation and I've been a coach, an instructor, and a mentor to various people throughout my career. All of this adds up to helping me stay focused on creating amazing art!</p>
        </div>
      </div>
    </div>
  );
}

function AboutSocial() {
  return (
    <div className="row center">
      <div className="col-lg-12">
        <h1 className="main-heading">Find Me on Social Media</h1>
        <div className="social-div">
          <Link to ="/facebook" target="_blank">
            <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Facebook+Icon.svg" className="social-link-icon" alt="" />
          </Link>
          <Link to ="/twitter" target="_blank">
            <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Twitter+Icon.svg" className="social-link-icon" alt="" />
          </Link>
          <Link to ="/youtube" target="_blank">
            <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/YouTube+Icon.svg" className="social-link-icon" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="container-fluid no-padding">
      <AboutHeading />
      <AboutSocial />
    </div>
  );
}

export default About;
