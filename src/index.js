import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Shirts from './components/Shirts/Shirts';
import Cart from './components/Cart/Cart';
import ScrollToTop from './components/Extras/ScrollToTop';
import * as serviceWorker from './serviceWorker';

function MyRouter() {
  const chooseClick = (e) => {
    if(e.currentTarget.id === "Marketing Package") {
      marketingCart();
    } else if(e.currentTarget.id === "Logo Design") {
      logoCart();
    } else if (e.currentTarget.id === "Business Card Design") {
      businesscardCart();
    } else if (e.currentTarget.id === "Custom Illustrations") {
      illustrationCart();
    } else if (e.currentTarget.id === "Wedding Invite Design") {
      inviteCart();
    } else if (e.currentTarget.id === "Website Design") {
      websiteCart();
    }
  }

  const [carts, setCarts] = useState(
    {
      productName: "Nothing in Cart",
      productShortname: "No Item",
      productQuantity: 0,
      productPrice: 0.00,
      productRowHeader: "",
      productIncludes1: "",
      productIncludes2: "",
      productIncludes3: "",
      productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/NoItem-icon.svg",
      productLinkURL: "/cart"
    }
  );

  const emptyCart = () => {
    setCarts(
      {
        productName: "Nothing in Cart",
        productShortname: "No Item",
        productQuantity: 0,
        productPrice: 0.00,
        productRowHeader: "",
        productIncludes1: "",
        productIncludes2: "",
        productIncludes3: "",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/NoItem-icon.svg",
        productLinkURL: "/cart"
      }
    );
  };

  const marketingCart = () => {
    setCarts(
      {
        productName: "Marketing Package",
        productShortname: "Marketing",
        productQuantity: 1,
        productPrice: 14999.99,
        productRowHeader: "This package includes logo, business card, envelope & letterhead designs as well as a style guide!",
        productIncludes1: "✓ Logo Design",
        productIncludes2: "✓ Business Card Design",
        productIncludes3: "✓ Style Guide",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Branding-icon.svg",
        productLinkURL: "/marketing-pp"
      }
    );
  };

  const logoCart = () => {
    setCarts(
      {
        productName: "Logo Design",
        productShortname: "Logo",
        productQuantity: 1,
        productPrice: 9999.99,
        productRowHeader: "Logo design includes 4 logo versions. 10 thumbnails, 2 revisions, 3 roughs, and 1 final world-class logo!",
        productIncludes1: "✓ Refresh or Recreate a Logo",
        productIncludes2: "✓ Professional Look",
        productIncludes3: "✓ Vector Files",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Logos-icon.svg",
        productLinkURL: "/logo-pp"
      }
    );
  };

  const businesscardCart = () => {
    setCarts(
      {
        productName: "Business Card Design",
        productShortname: "Business Card",
        productQuantity: 1,
        productPrice: 499.99,
        productRowHeader: "Your business card design includes 3 layout roughs, one final layout and file formats for future use (print and vector)!",
        productIncludes1: "✓ Beautiful Custom Designs",
        productIncludes2: "✓ Professional Templates",
        productIncludes3: "✓ Print-ready Files",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/BusinessCards-icon.svg",
        productLinkURL: "/businesscard-pp"
      }
    );
  };

  const illustrationCart = () => {
    setCarts(
      {
        productName: "Custom Illustrations",
        productShortname: "Illustrations",
        productQuantity: 1,
        productPrice: 8999.99,
        productRowHeader: "Your custom illustration includes 3 layout roughs, one final layout and file formats for future use (print only)!",
        productIncludes1: "✓ Professional Illustration",
        productIncludes2: "✓ Choose Style and Color Options",
        productIncludes3: "✓ Print-ready Files",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Illustrations-icon.svg",
        productLinkURL: "/illustration-pp"
      }
    );
  };

  const inviteCart = () => {
    setCarts(
      {
        productName: "Wedding Invite Design",
        productShortname: "Wedding Invite",
        productQuantity: 1,
        productPrice: 399.99,
        productRowHeader: "Custom wedding invite design includes 3 layout roughs, one final layout and file formats that last a lifetime!",
        productIncludes1: "✓ Create Your Dream Invite",
        productIncludes2: "✓ Professional Template",
        productIncludes3: "✓ Print-ready Files",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Invites-icon.svg",
        productLinkURL: "/invite-pp"
      }
    );
  };

  const websiteCart = () => {
    setCarts(
      {
        productName: "Website Design",
        productShortname: "Website",
        productQuantity: 1,
        productPrice: 19999.99,
        productRowHeader: "Your professional website design includes a SPA with 5 pages, 10 hand-picked images, and modern iconography!",
        productIncludes1: "✓ Fully Functioning Code",
        productIncludes2: "✓ Professional UX/UI",
        productIncludes3: "✓ Amazing Images and Icons",
        productLogo: "https://bryandoconnor.s3-us-west-2.amazonaws.com/images/Web-icon.svg",
        productLinkURL: "/website-pp"
      }
    );
  };

  return (
    <Router onUpdate={() => window.scrollTo(0, 0)} >
      <Navbar qty={carts.productQuantity} />
      <ScrollToTop>

      <Route exact path="/" component={Home} />

      <Route exact path="/products" render={(props) =>
        <Products {...carts}
        onClickEvent={chooseClick}
        onClick1={emptyCart}
         />} />

      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/about" component={About} />
      <Route exact path="/shirts" component={Shirts} />

      <Route exact path="/cart" render={(props) =>
        <Cart {...carts}
        onClickEvent={chooseClick}
        onClick1={emptyCart}
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

      <Route exact path='/illustration-pp' component={() => {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KECFQC6L3UBQU';
        return null;
      }} />

      <Route exact path='/invite-pp' component={() => {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BJ49P6J8N5MQL';
        return null;
      }} />

      <Route exact path='/website-pp' component={() => {
        window.location.href = 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PTGDMFBKX9P6Q';
        return null;
      }} />

      <Route exact path='/ossies-mens-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/i_eat_at_ossies_mens_t_shirt-235733169565141432';
        return null;
      }} />

      <Route exact path='/ossies-womens-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/i_eat_at_ossies_womens_t_shirt-235003222720023867';
        return null;
      }} />

      <Route exact path='/ossies-kids-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/i_eat_at_ossies_kids_t_shirt-235149394548698012';
        return null;
      }} />

      <Route exact path='/ossies-aprons-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/i_eat_at_ossies_apron-154873931354488868';
        return null;
      }} />

      <Route exact path='/lilies-mens-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/consider_the_lilies_cross_mens_black_t_shirt-235974912798412078';
        return null;
      }} />

      <Route exact path='/afraid-mens-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/be_not_afraid_wings_mens_black_t_shirt-235640684584076550';
        return null;
      }} />

      <Route exact path='/lilies-womens-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/consider_the_lilies_cross_womens_black_t_shirt-235910854397781281';
        return null;
      }} />

      <Route exact path='/afraid-womens-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/be_not_afraid_wings_womens_black_t_shirt-235276667109904535';
        return null;
      }} />

      <Route exact path='/never-give-up-mug-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/never_give_up_mug-168290438334133454';
        return null;
      }} />

      <Route exact path='/done-right-mug-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/a_job_worth_doin_mug-168064899396292397';
        return null;
      }} />

      <Route exact path='/dragon-wreath-mug-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/dragon_wreath_mug-168772340050709168';
        return null;
      }} />

      <Route exact path='/grit-mug-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/grit_mug-168204481718969624';
        return null;
      }} />

      <Route exact path='/grit-mens-black-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/grit_mens_black_t_shirt-235411528238884380';
        return null;
      }} />

      <Route exact path='/grit-mens-white-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/grit_mens_white_t_shirt-235114754514561848';
        return null;
      }} />

      <Route exact path='/grit-womens-black-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/grit_womens_black_t_shirt-235670526377860667';
        return null;
      }} />

      <Route exact path='/grit-womens-white-shirt-zazzle' component={() => {
        window.location.href = 'https://www.zazzle.com/grit_womens_white_t_shirt-235313079401115954';
        return null;
      }} />

      </ScrollToTop>
      <Footer />
    </Router>
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
