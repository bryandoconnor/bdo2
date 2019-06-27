import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '../bootstrap.min.css';
import '../index.css';

function Navbar(props) {
  const [menuDisplay, setMenuDisplay] = useState(
    {display: "flex"}
  );

  const [closeDisplay, setCloseDisplay] = useState(
    {display: "none"}
  );

  const [navDisplay, setNavDisplay] = useState(
    {display: "none"}
  );

  const menuStyle = {
    displays: {menuDisplay}
  };

  const closeStyle = {
    displays: {closeDisplay}
  }

  const navStyle = {
    displays: {navDisplay}
  }

  const clickMenu = () => {
    setMenuDisplay(
      {
        display: "none"
      }
    );
    setCloseDisplay(
      {
        display: "block"
      }
    );
    setNavDisplay(
      {
        display: "flex"
      }
    )
  };

  const clickClose = () => {
    setMenuDisplay(
      {
        display: "block"
      }
    );
    setCloseDisplay(
      {
        display: "none"
      }
    );
    setNavDisplay(
      {
        display: "none"
      }
    )
  };

  return(
    <div id="navbar" className="row">
      <div className="col-12">

        <div className="navBar">

          <div className="navBrand">
            <Link to ="/">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Brand.png" alt="Brand logo" />
            </Link>
          </div>

          <div className="nav-wrapper">
            <div className="nav">
              <Link to ="/" className="navLink">HOME</Link>
              <Link to ="/products" className="navLink">PRODUCTS</Link>
              <Link to ="/gallery" className="navLink">GALLERY</Link>
              <Link to ="/about" className="navLink">ABOUT</Link>
              <Link to ="/cart" className="navLink"><i className="fas fa-shopping-cart"></i><span className="count-cart">{props.qty}</span></Link>
            </div>
          </div>

        </div>

        <div className="navBar-mobile">

          <div className="navBrand">
            <Link to ="/">
              <img src="https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Brand.png" alt="Brand logo" />
            </Link>
          </div>

          <div style={menuStyle.displays.menuDisplay}>
            <div className="navHamburger" onClick={clickMenu}>Menu</div>
          </div>
          <div style={closeStyle.displays.closeDisplay}>
            <div className="navHamburger" onClick={clickClose}>X</div>
          </div>

          <div className="nav-mobile" style={navStyle.displays.navDisplay}>
            <Link to ="/" className="navLink">HOME</Link>
            <Link to ="/products" className="navLink">PRODUCTS</Link>
            <Link to ="/gallery" className="navLink">GALLERY</Link>
            <Link to ="/about" className="navLink">ABOUT</Link>
            <Link to ="/cart" className="navLink"><i className="fas fa-shopping-cart"></i><span className="count-cart">{props.qty}</span></Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Navbar;