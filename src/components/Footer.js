import React from 'react';

import logo from '../img/planet-logo-test.svg';
import FacebookIcon from '../img/social/FacebookIcon';
import InstagramIcon from '../img/social/InstagramIcon';
import TwitterIcon from '../img/social/TwitterIcon';
import DiscogsIcon from '../img/social/DiscogsIcon';
import AmazonIcon from '../img/social/AmazonIcon';
import EBayIcon from '../img/social/EBayIcon';

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className="footer has-text-white-ter"
        style={{ position: 'relative', zIndex: 10 }}
      >
        <div className="content has-text-centered">
          <img src={logo} alt="Planet Records" style={{ height: '5em' }} />
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div>
              <div style={{ fontWeight: 'bold' }}>
                144 Mt Auburn St, Cambridge, Ma 02138
                <span className="spacer">•</span>
                (617) 492-0693
                <span className="spacer">•</span>
                planet@planet-records.com
              </div>
              <div className="content social">
                <a
                  title="facebook"
                  target="blank"
                  href="https://www.facebook.com/PlanetRecords/"
                >
                  <FacebookIcon />
                </a>
                <a
                  title="twitter"
                  target="blank"
                  href="https://twitter.com/PlanetRecords83"
                >
                  <TwitterIcon />
                </a>
                <a
                  title="instagram"
                  target="blank"
                  href="https://www.instagram.com/planet_recordz/"
                >
                  <InstagramIcon />
                </a>
                <a
                  title="discogs"
                  target="blank"
                  href="https://www.discogs.com/seller/PlanetRecords/profile"
                >
                  <DiscogsIcon />
                </a>
                <a
                  title="amazon"
                  target="blank"
                  href="https://www.amazon.com/s?me=A3AFXHL86TBAH4&marketplaceID=ATVPDKIKX0DER"
                >
                  <AmazonIcon />
                </a>
                <a
                  title="ebay"
                  target="blank"
                  href="https://www.ebay.com/usr/zzy49"
                >
                  <EBayIcon style={{ width: 40 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
