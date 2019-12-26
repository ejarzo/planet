import React from 'react';
import { Link } from 'gatsby';
import PlanetRecordsLogo from '../img/PlanetRecordsLogo';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    this.setState({ active: !this.state.active }, () => {
      this.state.active
        ? this.setState({ navBarActiveClass: 'is-active' })
        : this.setState({ navBarActiveClass: '' });
    });
  };

  render() {
    const links = [
      { label: 'About', to: '/about' },
      { label: 'Sell & Trade', to: '/sell-trade' },
      { label: 'Location & Hours', to: '/location-hours' },
      { label: 'T-Shirts', to: '/tshirts' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Band Name Vortex', to: '/band-name-vortex' },
      // { label: 'Products', to: '/products' },
      // { label: 'Blog', to: '/blog' },
      // { label: 'Contact', to: '/contact' },
      // { label: 'Form Examples', to: '/contact/examples' }
    ];
    const { isTransparent } = this.props;
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
        style={{
          background: isTransparent ? 'none' : '#003268',
          width: '100%',
          position: 'fixed',
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <PlanetRecordsLogo style={{ height: '2em', maxHeight: 'none' }} />
            </Link>
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
                <Link
                  key={to}
                  className="navbar-item site-link"
                  activeClassName="is-active"
                  to={to}
                >
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
