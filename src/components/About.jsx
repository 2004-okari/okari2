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
import html from '../assets/images/html-5.png'
import css from '../assets/images/css-3.png';
import git from '../assets/images/git.png';
import web from '../assets/images/web.png';
import postgre from '../assets/images/postgre.png';
import react from '../assets/images/atom.png';

const about = {
  languages: [
    {
      name: 'JavaScript',
      image: javascript,
    },
    {
      name: 'HTML',
      image: html,
    },
    {
      name: 'CSS',
      image: css,
    },
    {
      name: 'Ruby',
      image: ruby,
    },

  ],
  frameworks: [
    {
      name: 'React/React Native',
      image: react,
    },
    {
      name: 'Next js',
      image: 'vintage',
    },
    {
      name: 'Ruby on Rails',
      image: 'vintage',
    },
  ],

  skills: [
    {
      name: 'Firebase',
      image: git,
    },
    {
      name: 'Git',
      image: git,
    },
    {
      name: 'Postgress',
      image: postgre,
    },
    {
      name: 'Web Development',
      image: web,
    },
    {
      name: 'Firebase',
      image: 'vintage',
    },
    {
      name: 'Firebase',
      image: 'vintage',
    },
    {
      name: 'Firebase',
      image: 'vintage',
    },
  ],
};
const About = () => {
  const [expanded, setExpanded] = React.useState(false);

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
                <EmailIcon size={24} color="red" />
              </a>
            </li>
            <li className="linked">
              <a href="/" className="sociallink">
                <IoLogoInstagram size={24} />
              </a>
            </li>
            <li className="linked">
              <a href="/" className="sociallink">
                <IoLogoTwitter size={24} />
              </a>
            </li>
            <li className="linked">
              <a href="/" className="sociallink">
                <IoLogoWhatsapp size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="skillssection">
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary expandIcon={<IoChevronDownOutline />}>
            Language
          </AccordionSummary>
          <AccordionDetails className='accorddetails'>
            {about.languages.map((item) => {
              return (
                <div className='skilldiv'
                >
                  <img src={item.image} alt="" />
                  <div>{item.name}</div>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary expandIcon={<IoChevronDownOutline />}>
            Frameworks
          </AccordionSummary>
          <AccordionDetails>
            {about.frameworks.map((item) => {
              return (
                <div>
                  <div>{item.image}</div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary expandIcon={<IoChevronDownOutline />}>
            Skills
          </AccordionSummary>
          <AccordionDetails>
            {about.skills.map((item) => {
              return (
                <div>
                  <div>{item.image}</div>
                  <div>{item.name}</div>
                </div>
              );
            })}
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default About;
