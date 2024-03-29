/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../Extras/Heroes.css';
import '../../index.css';

function AboutHeading() {
	return (
		<div>
			<div className="AboutHero" />
			<div className="row text-center">
				<div className="col-12 p-0 text-center">
					<h1 className="main-heading">About the Artist</h1>
					<p className="xlg-paragraph lg-margin lg-padding">I've been working as a professional designer and developer for over 14 years. My clients have ranged from small businesses and individuals to large international corporations. I've created thousands of design products for hundreds of companies. This includes branding packages, logos, web sites, illustrations, business cards, wedding invitations, and so much more!</p>
					<p className="xlg-paragraph lg-margin lg-padding">I love using my skills to help people! Design is not just a passion for me, it is a way of thinking and living. My formal education includes a Bachelors degree in Media Arts and Animation and I've been a coach, an instructor, and a mentor to various people throughout my career. All of this adds up to helping me stay focused on creating amazing art!</p>
				</div>
			</div>
		</div>
	);
}

function AboutSocial() {
	return (
		<div className="row text-center">
			<div className="col-lg-12">
				<h1 className="main-heading">Find Me on Social Media</h1>
				<div className="social-div">
					<a href="https://www.facebook.com/myamazingart/" target="_blank" rel="noreferrer" >
						<img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Facebook+Icon.svg" className="social-link-icon" alt="Facebook icon" />
					</a>
					<a href="https://twitter.com/MyAmazingArt" target="_blank" rel="noreferrer">
						<img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Twitter+Icon.svg" className="social-link-icon" alt="Twitter icon" />
					</a>
					<a href="https://www.youtube.com/channel/UCJDaTHvz6hPazDF37DMadWw?" target="_blank" rel="noreferrer">
						<img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/YouTube+Icon.svg" className="social-link-icon" alt="YouTube icon" />
					</a>
				</div>
			</div>
		</div>
	);
}

function About() {
	return (
		<div className="container-fluid p-0">
			<AboutHeading />
			<AboutSocial />
		</div>
	);
}

export default About;
