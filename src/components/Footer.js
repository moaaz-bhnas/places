import React from 'react';
import googleIcon from '../icons/google.svg';
import foursquareIcon from '../icons/foursquare.svg';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <p>
        <small>
          Powered by <img className="api-icon" src={googleIcon} alt="Google maps icon"/> <a href="https://developers.google.com/maps/documentation/">
            <b>Google Maps</b>
          </a> and <img className="api-icon" src={foursquareIcon} alt="Foursquare icon"/> <a href="https://developer.foursquare.com/">
            <b>Foursquare</b> 
          </a> APIs.
        </small>
      </p>
      <p>
        <small>
          Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC 3.0 BY</a>.
        </small>
      </p>
    </footer>
  );
}

export default Footer;