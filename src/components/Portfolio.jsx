import React, { useState } from 'react';
import '../Styles/PortfolioScreen.css';
import {
  IoRadioButtonOnOutline,
  IoCloseOutline,
  IoGlobeOutline,
} from 'react-icons/io5';
import Modal from '@mui/material/Modal';
import calculator from '../assets/images/calculator.jpg';
import leaderboard from '../assets/images/leaderboard.jpg';
import summit from '../assets/images/summit.jpg';
import space from '../assets/images/space.jpg';
import tipcalculator from '../assets/images/tipcalculator.jpg';
import portfolio from '../assets/images/portfolio.png';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = [
    {
      id: 1,
      title: 'Math Magicians',
      category: 'Web App Dev',
      year: '2023',
      image: calculator,
      description:
        'Math Magicians is not just your ordinary calculator app; it&apos;s a versatile and multi-functional tool that simplifies your everyday calculations and offers a dose of inspiration along the way. With multiple pages, including Home, Calculator, and Quote Generator, Math Magicians transforms your math-solving routine into an uplifting and productive experience.',
      tags: ['react', 'react-router', 'APIs', 'redux'],
      link: 'https://math-magicians-git-dev-2004okaris-projects.vercel.app',
    },
    {
      id: 2,
      title: 'Interstellar',
      category: 'Web App Development',
      year: '2023',
      image: space,
      description:
        'Embark on an interstellar journey with SpaceXplorer, a cutting-edge React application that lets you explore the cosmos like never before. SpaceXplorer is your ultimate portal for discovering spaceships, joining space missions, and booking seats for the adventure of a lifetime. Whether you&apos;re a space enthusiast, aspiring astronaut, or curious traveller, SpaceXplorer turns your dreams of space exploration into reality.',
      tags: ['react', 'redux', 'APIs', 'bootstrap'],
      link: 'https://react-capstone-jjmhoo8fd-2004okaris-projects.vercel.app',
    },
    {
      id: 3,
      title: 'TipPal',
      category: 'Web App Development',
      year: '2023',
      image: tipcalculator,
      description:
        'Welcome to TipPal, your ultimate tip calculator for every occasion. Whether you’re dining out, splitting the bill, or tipping for exceptional service, TipPal makes tipping a breeze. With its intuitive design, user-friendly interface, and customizable features, TipPal ensures that you tip right every time.',
      tags: ['Front-end development', 'Responsive Design'],
      link: 'https://tip-calculator-l632.vercel.app/',
    },
    {
      id: 4,
      title: 'Easytask',
      category: 'Website',
      year: '2023',
      image: leaderboard,
      description:
        'Introducing EasyTask, your go-to web app for simplifying your daily tasks and boosting productivity. EasyTask is a straightforward and user-friendly to-do list application designed to help you stay organized and on top of your goals, whether it&apos;s managing work assignments, personal chores, or planning projects.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      link: 'https://easytask-five.vercel.app/',
    },
    {
      id: 5,
      title: 'Leaderboard',
      category: 'Website',
      year: '2023',
      image: leaderboard,
      description:
        'Introducing Leaderboard, your go-to leaderboard for storing and tracking player scores in a variety of games and competitions. Whether you&apos;re hosting a gaming tournament, managing sports leagues, or simply tracking scores for friendly competitions, Leaderboard makes scorekeeping effortless and fun. With Leaderboard&apos;s intuitive design and user-friendly features, you can keep tabs on scores and rankings with ease.',
      tags: ['HTML', 'CSS', 'JavaScript', 'local storage'],
      link: 'https://leaderboard-fawn.vercel.app/',
    },
    {
      id: 6,
      title: 'DevSummit website',
      category: 'Website',
      year: '2023',
      image: summit,
      description:
        'Welcome to the DevSummit Hub, your all-in-one landing page designed exclusively for the Developer&apos;s Summit! Whether you&apos;re a seasoned developer, a tech enthusiast, or a first-time attendee, DevSummit Hub is your digital gateway to a world of learning, networking, and innovation.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
      link: 'https://2004-okari.github.io/CAPSTONE-01/',
    },
    {
      id: 7,
      title: 'Portfolio template',
      category: 'Website',
      year: '2023',
      image: portfolio,
      description:
        'Welcome to the online portfolio showcase of X, where creativity, innovation, and expertise converge. This dynamic website is your gateway to a comprehensive display of X&apos;s professional journey, achievements, and creative works. Whether you&apos;re a potential employer, client, or simply an admirer of exceptional talent, this portfolio website offers a glimpse into the world of X.',
      tags: ['Front-end development', 'Responsive Design'],
      link: 'https://2004-okari.github.io/MY-PORTFOLIO/',
    },
  ];

  return (
    <>
      <div className="portfoliocontainer">
        <div className="projects">
          {data.map((item) => (
            <div className="project" key={item.id}>
              <div className="projectimage">
                <img className="images" src={item.image} alt={item.title} />
              </div>
              <div className="projectdetails">
                <h3 className="projtext">{item.title}</h3>
                <div className="projectmetadata">
                  <ul className="projlist">
                    <li className="list">
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />
                      {' '}
                      {item.category}
                    </li>
                    <li className="list">
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />
                      {' '}
                      {item.year}
                    </li>
                  </ul>
                </div>
                <p className="projdesc">
                  {item.description.slice(0, 100).padEnd(103, '...')}
                </p>
                <div className="projecttags">
                  <ul className="projecttaglist">
                    {item.tags.map((tag) => (
                      <li className="taglist" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="projectlink"
                  onClick={() => handleOpen(item)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal className="mmodal" open={open} onClose={handleClose}>
        <div className="modalcontent">
          {selectedItem && (
            <div className="mproject" key={selectedItem.id}>
              <div className="mprojectdetails">
                <div className="mprojecttitle">
                  <h3 className="mprojtext">{selectedItem.title}</h3>
                  <IoCloseOutline color="" size={30} onClick={handleClose} />
                </div>
                <div className="mprojectmetadata">
                  <ul className="mprojlist">
                    <li className="mlist">
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />
                      {' '}
                      {selectedItem.category}
                    </li>
                    <li className="mlist">
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />
                      {' '}
                      {selectedItem.year}
                    </li>
                  </ul>
                </div>
                <div className="divsec">
                  <div className="mprojectimage">
                    <img
                      className="mimages"
                      src={selectedItem.image}
                      alt={selectedItem.title}
                    />
                  </div>
                  <div className="divsec2">
                    <p className="mprojdesc">{selectedItem.description}</p>
                    <div className="mprojecttags">
                      <ul className="mprojecttaglist">
                        {selectedItem.tags.map((tag) => (
                          <li className="mtaglist" key={tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '1px',
                        backgroundColor: '#EBECF0',
                        marginBottom: '12px',
                      }}
                    />
                    <button type="button" className="mbutton">
                      <a
                        className="mprojectlink"
                        href={selectedItem.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p
                          style={{
                            fontFamily: 'Poppins',
                            fontWeight: 'semi-bold',
                            fontSize: '20px',
                          }}
                        >
                          Live Preview
                        </p>
                        <IoGlobeOutline color="#505F79" size={22} />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Portfolio;
