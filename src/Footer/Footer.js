import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '../bootstrap.min.css';

function Footer() {

  return(
    <div className="row full-row">
      <div className="col-12">
        <p className="footer">
          <Link to ="/" className="footLink">bryandoconnor.com | © <span>{(new Date().getFullYear())}</span></Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
