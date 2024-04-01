import React from 'react';
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import EmailIcon from '@mui/icons-material/Email';
import '../Styles/IntroductionScreen.css';

const Introduction = () => (
  <div className="introductioncontainer">
    <div className="introductioncontent">
      <h2 className="introductiontitle">
        I'm <span className="span"> Okari Nyandika </span>
        <br />
        Glad to see you!
      </h2>
      <p className="introductiontext">
        I'm a{' '}
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          software developer
        </span>
        . I can help you build a mobile app, website or product. Look through
        some of my work and experience. If you like what you see and have a
        project you need coded, don't hesitate to contact me.
      </p>
      <div className="connectsection">
        <p className="connecttext">LET'S CONNECT</p>
        <ul className="sociallinks">
          <li className="linked">
            <a href="/" className="sociallink">
              <IoLogoInstagram color="#505F79" size={24} />
            </a>
          </li>
          <li className="linked">
            <a href="/" className="sociallink">
              <IoLogoTwitter color="#505F79" size={24} />
            </a>
          </li>
          <li className="linked">
            <a href="/" className="sociallink">
              <EmailIcon
                size={24}
                style={{
                  color: '#505F79',
                }}
              />
            </a>
          </li>
          <li className="linked">
            <a href="/" className="sociallink">
              <IoLogoWhatsapp color="#505F79" size={24} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Introduction;
