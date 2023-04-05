import React from 'react';

import Logo from '../img/PlanetRecordsLogo.js';
import FacebookIcon from '../img/social/FacebookIcon';
import InstagramIcon from '../img/social/InstagramIcon';
import TwitterIcon from '../img/social/TwitterIcon';
import DiscogsIcon from '../img/social/DiscogsIcon';
import AmazonIcon from '../img/social/AmazonIcon';
import EBayIcon from '../img/social/EBayIcon';

const Footer = class extends React.Component {
  render() {
    const { isTransparent } = this.props;
    if (isTransparent) return null;
    return (
      <footer
        className="footer has-text-white-ter"
        style={{
          position: 'relative',
          zIndex: 20,
          background: isTransparent ? 'none' : '#003268',
        }}
      >
        <div className="content has-text-centered">
          <Logo style={{ height: '5em' }} />
        </div>
        {/* <img className="lady-banner" src={ladyBanner} /> */}
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div style={{ padding: '0 1em' }}>
              <div style={{ fontWeight: 'bold' }}>
                144 Mt Auburn St, Cambridge, MA 02138
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
                  href="https://www.ebay.com/str/planetrecordsandcds"
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
