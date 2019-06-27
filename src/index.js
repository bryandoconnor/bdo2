import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Products from './Products/Products';
import Gallery from './Gallery/Gallery';
import About from './About/About';
import Cart from './Cart/Cart';
import ScrollToTop from './Extras/ScrollToTop';
import * as serviceWorker from './serviceWorker';

function MyRouter() {
  const [carts, setCarts] = useState(
    {
      name: "Nothing in Cart",
      shortname: "No Item",
      quantity: 0,
      price: 0,
      tax: 0,
      total: 0,
      description: "",
      check1: "",
      check2: "",
      check3: "",
      imageUrl: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/NoItem-icon.svg",
      linkUrl: "/cart"
    }
  );

  const emptyCart = () => {
    setCarts(
      {
        name: "Nothing in Cart",
        shortname: "No Item",
        quantity: 0,
        price: 0,
        tax: 0,
        total: 0,
        description: "",
        check1: "",
        check2: "",
        check3: "",
        imageUrl: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/NoItem-icon.svg",
        linkUrl: "/cart"
      }
    );
  };

  const marketingCart = () => {
    setCarts(
      {
        name: "Marketing Package",
        shortname: "Marketing",
        quantity: 1,
        price: 1424.99,
        tax: 97.61,
        total: "1522.60",
        description: "My standard branding package includes logo design, business card design, envelope layout, letterhead design, stock photos & a 10 page style guide!",
        check1: "✓ Logo Design",
        check2: "✓ Business Card Design",
        check3: "✓ Style Guide",
        imageUrl: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Branding-icon.svg",
        linkUrl: "/marketing-pp"
      }
    );
  };

  const logoCart = () => {
    setCarts(
      {
        name: "Logo Design",
        shortname: "Logo",
        quantity: 1,
        price: 274.99,
        tax: 18.84,
        total: 293.83,
        description: "A professional logo design includes 2 stacked and 2 horizontal versions of your logo (normal & reversed). With this product you receive 10 thumbnails, 2 revisions, 3 roughs, and 1 final world-class logo!",
        check1: "✓ Vector File Formats",
        check2: "✓ Quality Fonts",
        check3: "✓ Traditional or Modern style",
        imageUrl: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Logos-icon.svg",
        linkUrl: "/logo-pp"
      }
    );
  };

  const businesscardCart = () => {
    setCarts(
      {
        name: "Business Card Design",
        shortname: "Business Card",
        quantity: 1,
        price: 189.99,
        tax: 13.02,
        total: "203.00",
        description: "Your business card design includes 3 layout roughs, one final layout and file formats for future use (print and vector).",
        check1: "✓ Industry best practices",
        check2: "✓ Company templates",
        check3: "✓ Quick turnaround time",
        imageUrl: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/BusinessCards-icon.svg",
        linkUrl: "/businesscard-pp"
      }
    );
  };

  return (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)} >

      <Navbar qty={carts.quantity} />
      <ScrollToTop>

      <Route exact path="/" component={Home} />

      <Route exact path="/products" render={(props) =>
        <Products {...carts}
        onClick1={emptyCart}
        onClick2={marketingCart}
        onClick3={logoCart}
        onClick4={businesscardCart}
         />} />

      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about" component={About} />

      <Route exact path="/cart" render={(props) =>
        <Cart {...carts}
        onClick1={emptyCart}
        onClick2={marketingCart}
        onClick3={logoCart}
        onClick4={businesscardCart}
         />} />

      <Route exact path='/facebook' component={() => {
        window.location.href = 'https://www.facebook.com/myamazingart/';
        return null;
      }} />

      <Route exact path='/twitter' component={() => {
        window.location.href = 'https://twitter.com/MyAmazingArt';
        return null;
      }} />

      <Route exact path='/youtube' component={() => {
        window.location.href = 'https://www.youtube.com/channel/UCJDaTHvz6hPazDF37DMadWw?';
        return null;
      }} />

      <Route exact path='/marketing-pp' component={() => {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6JTXU56HHYALG';
        return null;
      }} />

      <Route exact path='/logo-pp' component={() => {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=B826XEELJR6Y2';
        return null;
      }} />

      <Route exact path='/businesscard-pp' component={() => {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=XHB43GC3Z8UKA';
        return null;
      }} />

      </ScrollToTop>
      <Footer />

    </BrowserRouter>
  );
}

function render() {
  ReactDOM.render(
    <MyRouter />, document.getElementById('root')
  );
}

render();

// If you want your app to work offline and load faster, you can change unregister() to register() below. Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
