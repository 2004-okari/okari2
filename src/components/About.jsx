import React from 'react';
import '../Styles/AboutScreen.css';
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoLogoTwitter,
  IoChevronDownOutline,
} from 'react-icons/io5';
import EmailIcon from '@mui/icons-material/Email';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ruby from '../assets/images/ruby.png';
import javascript from '../assets/images/java-script.png';
import html from '../assets/images/html-5.png';
import css from '../assets/images/css-3.png';
import git from '../assets/images/git.png';
import web from '../assets/images/web.png';
import postgre from '../assets/images/postgre.png';
import react from '../assets/images/atom.png';
import ror from '../assets/images/ror.png';
import nextjs from '../assets/images/nextjs.png';
import firebase from '../assets/images/firebase.png';
import sass from '../assets/images/sass.png';
import reactnative from '../assets/images/reactnative.png';

const about = {
  languages: [
    {
      id: 1,
      name: 'JavaScript',
      image: javascript,
    },
    {
      id: 2,
      name: 'HTML',
      image: html,
    },
    {
      id: 3,
      name: 'CSS',
      image: css,
    },
    {
      id: 4,
      name: 'Ruby',
      image: ruby,
    },
  ],
  frameworks: [
    {
      id: 1,
      name: 'React',
      image: react,
    },
    {
      id: 2,
      name: 'Next js',
      image: nextjs,
    },
    {
      id: 3,
      name: 'Ruby on Rails',
      image: ror,
    },
    {
      id: 4,
      name: 'React Native',
      image: reactnative,
    },
  ],

  skills: [
    {
      id: 1,
      name: 'Firebase',
      image: firebase,
    },
    {
      id: 2,
      name: 'Git',
      image: git,
    },
    {
      id: 3,
      name: 'Postgress',
      image: postgre,
    },
    {
      id: 4,
      name: 'Web Development',
      image: web,
    },
    {
      id: 5,
      name: 'Sass',
      image: sass,
    },
    {
      id: 6,
      name: 'Firebase',
      image: 'vintage',
    },
    {
      id: 7,
      name: 'Firebase',
      image: 'vintage',
    },
  ],
};
const About = () => {
  const [expanded, setExpanded] = React.useState('panel3');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="aboutcontainer">
      <div className="aboutcontent">
        <h3 className="abouttitle">About Myself</h3>
        <p className="abouttext">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
          ratione. Autem sunt, ipsam voluptates totam quis, asperiores similique
          quisquam repudiandae aliquid officia alias voluptate minus nostrum?
          Aliquam quod repudiandae omnis.
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
      <div className="skillssection">
        <Accordion
          className="accord"
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            style={{
              fontSize: '20px',
              fontWeight: '500',
              fontFamily: 'Poppins, sans-serif',
              padding: '0',
            }}
            expandIcon={<IoChevronDownOutline />}
          >
            Language
          </AccordionSummary>
          <AccordionDetails className="accorddetails">
            {about.languages.map((item) => (
              <div className="skilldiv" key={item.id}>
                <img className="image" src={item.image} alt="" />
                <div className="textname">{item.name}</div>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          className="accord"
        >
          <AccordionSummary
            style={{
              fontSize: '20px',
              fontWeight: '500',
              fontFamily: 'Poppins, sans-serif',
              padding: '0',
            }}
            expandIcon={<IoChevronDownOutline />}
          >
            Frameworks
          </AccordionSummary>
          <AccordionDetails className="accorddetails">
            {about.frameworks.map((item) => (
              <div className="skilldiv" key={item.id}>
                <img className="image" src={item.image} alt="" />
                <div className="textname">{item.name}</div>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          className="accord"
        >
          <AccordionSummary
            style={{
              fontSize: '20px',
              fontWeight: '500',
              fontFamily: 'Poppins, sans-serif',
              padding: '0',
            }}
            expandIcon={<IoChevronDownOutline />}
          >
            Skills
          </AccordionSummary>
          <AccordionDetails className="accorddetails">
            {about.skills.map((item) => (
              <div className="skilldiv" key={item.id}>
                <img className="image" src={item.image} alt="" />
                <div className="textname">{item.name}</div>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
