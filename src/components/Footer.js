import React from 'react';
import { Link } from 'gatsby';

import logo from '../img/planet-logo-test.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-text-white-ter">
        <div className="content has-text-centered">
          <img src={logo} alt="Planet Records" style={{ height: '5em' }} />
        </div>
        <div className="content has-text-centered has-text-white-ter">
          <div className="container has-text-white-ter">
            <div>
              <div className="">
                144 Mt Auburn St, Cambridge, Ma 02138 • (617) 492-0693 •
                planet@planet-records.com
              </div>
              <div className="content social">
                <a
                  title="facebook"
                  target="blank"
                  href="https://www.facebook.com/PlanetRecords/"
                >
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com/PlanetRecords83">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="instagram"
                  target="blank"
                  href="https://www.instagram.com/planet_recordz/"
                >
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a
                  title="discogs"
                  href="https://www.discogs.com/seller/PlanetRecords/profile"
                >
                  Discogs
                </a>
                <a
                  title="amazon"
                  href="https://www.amazon.com/s?me=A3AFXHL86TBAH4&marketplaceID=ATVPDKIKX0DER"
                >
                  Amazon
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
