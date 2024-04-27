import React, { useState } from 'react';
import '../Styles/PortfolioScreen.css';
import {
  IoRadioButtonOnOutline,
  IoCloseOutline,
  IoGlobeOutline,
} from 'react-icons/io5';
import Modal from '@mui/material/Modal';
import calculator from '../assets/images/calculator.jpg';
import todo from '../assets/images/todo.jpg';
import leaderboard from '../assets/images/leaderboard.jpg';
import summit from '../assets/images/summit.jpg';
import footbal from '../assets/images/footbal.jpg';

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
      link: 'https://magician-math.netlify.app/',
    },
    {
      id: 2,
      title: 'Interstellar',
      category: 'Web App Development',
      year: '2023',
      image: calculator,
      description: 'Embark on an interstellar journey with SpaceXplorer, a cutting-edge React application that lets you explore the cosmos like never before. SpaceXplorer is your ultimate portal for discovering spaceships, joining space missions, and booking seats for the adventure of a lifetime. Whether you're a space enthusiast, aspiring astronaut, or curious traveller, SpaceXplorer turns your dreams of space exploration into reality.',
      tags: ['react', 'redux', 'APIs', 'bootstrap'],
      link: 'https://sprightly-gaufre-7108e7.netlify.app/',
    },
    {
      id: 3,
      title: 'Easytask',
      category: 'Website',
      year: '2023',
      image: todo,
      description: 'Introducing EasyTask, your go-to web app for simplifying your daily tasks and boosting productivity. EasyTask is a straightforward and user-friendly to-do list application designed to help you stay organized and on top of your goals, whether it's managing work assignments, personal chores, or planning projects.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      link: '',
    },
    {
      id: 4,
      title: 'Leaderboard',
      category: 'Website',
      year: '2023',
      image: leaderboard,
      description: 'Introducing Leaderboard, your go-to leaderboard for storing and tracking player scores in a variety of games and competitions. Whether you're hosting a gaming tournament, managing sports leagues, or simply tracking scores for friendly competitions, Leaderboard makes scorekeeping effortless and fun. With Leaderboard's intuitive design and user-friendly features, you can keep tabs on scores and rankings with ease.',
      tags: ['HTML', 'CSS', 'JavaScript', 'local storage'],
      link: '',
    },
    {
      id: 5,
      title: 'DevSummit website',
      category: 'Website',
      year: '2023',
      image: summit,
      description: 'Welcome to the DevSummit Hub, your all-in-one landing page designed exclusively for the Developer's Summit! Whether you're a seasoned developer, a tech enthusiast, or a first-time attendee, DevSummit Hub is your digital gateway to a world of learning, networking, and innovation.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
      link: '',
    },
    {
      id: 6,
      title: 'portfolio template',
      category: 'Website',
      year: '2023',
      image: todo,
      description: 'Welcome to the online portfolio showcase of X, where creativity, innovation, and expertise converge. This dynamic website is your gateway to a comprehensive display of X's professional journey, achievements, and creative works. Whether you're a potential employer, client, or simply an admirer of exceptional talent, this portfolio website offers a glimpse into the world of X.',
      tags: ['Front-end development', 'Responsive Design'],
      link: '',
    },
    {
      id: 7,
      title: 'TipPal',
      category: 'Web App Development',
      year: '2023',
      image: todo,
      description: 'Welcome to TipPal, your ultimate tip calculator for every occasion. Whether you’re dining out, splitting the bill, or tipping for exceptional service, TipPal makes tipping a breeze. With its intuitive design, user-friendly interface, and customizable features, TipPal ensures that you tip right every time.',
      tags: ['Front-end development', 'Responsive Design'],
      link: '',
    },
    {
      id: 8,
      title: 'sportySB',
      category: 'Web App Development',
      year: '2023',
      image: footbal,
      description: 'Introducing SportySB Stats Tracker, the ultimate web app for sports enthusiasts, coaches, and teams. SportySB Stats Tracker harnesses the power of the SportySB API to provide real-time sports statistics and insights, making it easier than ever to analyze and improve performance. Whether you're a coach seeking data-driven strategies or a sports fan tracking your favorite team, SportySB Stats Tracker is your all-in-one sports data companion.',
      tags: ['react', 'redux', 'APIs', 'Responsive Design'],
      link: '',
    }
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
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />{' '}
                      {item.category}
                    </li>
                    <li className="list">
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />{' '}
                      {item.year}
                    </li>
                  </ul>
                </div>
                <p className="projdesc">
                  {item.description.slice(0, 100).padEnd(103, '...')}
                </p>
                <div className="projecttags">
                  <ul className="projecttaglist">
                    {item.tags.map((tag, index) => (
                      <li className="taglist" key={index}>
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
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />{' '}
                      {selectedItem.category}
                    </li>
                    <li className="mlist">
                      <IoRadioButtonOnOutline color="#7A869A" size={10} />{' '}
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
                        {selectedItem.tags.map((tag, index) => (
                          <li className="mtaglist" key={index}>
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
