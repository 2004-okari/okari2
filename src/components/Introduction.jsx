import React from 'react';
import {
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import EmailIcon from '@mui/icons-material/Email';
import '../Styles/IntroductionScreen.css';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => (
  <div className="introductioncontainer">
    <div className="introductioncontent">
      <h2 className="introductiontitle">
        I&apos;m{' '}
        <span className="span">
          {' '}
          <TypeAnimation
            sequence={[
              'Okari Nyandika',
              500,
              'Okari Rooney',
              500,
              'a Full-stack developer',
              500,
              'a Mobile developer',
              500,
            ]}
            repeat={Infinity}
          />{' '}
        </span>
        <br />
        Glad to see you!
      </h2>
      <p className="introductiontext">
        I&apos;m a{' '}
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          software developer
        </span>
        . I can help you build a mobile app, website or product. Look through
        some of my work and experience. If you like what you see and have a
        project you need coded, don&apos;t hesitate to contact me.
      </p>
      <div className="connectsection">
        <p className="connecttext">LET&apos;S CONNECT</p>
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
