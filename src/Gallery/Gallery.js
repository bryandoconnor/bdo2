import React, { useState } from 'react';
import pieces from './Pieces';
import './Gallery.css';
import '../Extras/Heroes.css';
import '../index.css';

function GalleryHeading() {
  return (
    <div>
      <div className="GalleryHero"></div>
      <div className="row">
        <div className="col-12 center">
          <h1 className="main-heading">The Gallery!</h1>
          <p className="xlg-paragraph lg-margin lg-padding">My portfolio consists of a wide variety of pieces, rather than just a specific genre or style. This includes illustrations (original or fan art), client work, production pieces, environmental design, animation, and websites! Whether it's design, marketing, or just having something custom made, I offer services to people who want amazing art!</p>
        </div>
      </div>
    </div>
  );
}

function GalleryDisplay() {
  const [display, setDisplay] = useState("none");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");

  const myStyle = {
    displays: {display}
  };

  const myImage = {
    images: {image},
    titles: {title}
  };

  const clickOff = () => {
    setDisplay("none");
    setImage("");
    setTitle("");
  };

  const clickOn = (e) => {
    setDisplay("block");
    setImage("" + e.currentTarget.id);
    setTitle("" + e.currentTarget.title);
  };

  const galleryList = pieces.map((res) =>
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 gallery-column" key={res.title}>
      <div className="gallery-link" id={res.imageUrl} title={res.title} onClick={clickOn}>
        <img src={res.imageUrl} alt={res.title} className="image-thumbnail" />
      </div>
    </div>
  );

  return (
    <div>
      <div className="row center gallery-row">
        {galleryList}
      </div>
      <div className="gallery-overlay" onClick={clickOff}
      style={myStyle.displays}></div>
      <div className="gallery-display" onClick={clickOff}
      style={myStyle.displays}>
        <div className="center">
          <img className="image-full" src={myImage.images.image} alt="" />
          <div className="gallery-text-box">
            <h1 className="gallery-text">{myImage.titles.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="container-fluid no-padding">
      <GalleryHeading />
      <GalleryDisplay />
    </div>
  );
}

export default Gallery;
