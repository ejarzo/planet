import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ''
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active'
            })
          : this.setState({
              navBarActiveClass: ''
            });
      }
    );
  };

  render() {
    const links = [
      { label: 'About', to: '/about' },
      { label: 'Sell & Trade', to: '/sell-trade' },
      { label: 'Location & Hours', to: '/location-hours' },
      { label: 'Products', to: '/products' },
      // { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Form Examples', to: '/contact/examples' }
    ];

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              {links.map(({ label, to }) => (
                <Link className="navbar-item" to={to}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
