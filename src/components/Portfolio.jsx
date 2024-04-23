import React, { useState } from 'react';
import ian from '../assets/images/ian.jpg';
import '../Styles/PortfolioScreen.css';
import {
  IoRadioButtonOnOutline,
  IoCloseOutline,
  IoGlobeOutline,
} from 'react-icons/io5';
import Modal from '@mui/material/Modal';

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
      title: 'Project 1',
      category: 'Mobile App Dev',
      year: '2022',
      image: ian,
      description:
        'Lorem ipsum dolor sit amet tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      tags: ['react', 'react-router', 'styled', 'components'],
      link: '',
    },
    {
      id: 2,
      title: 'Project 2',
      category: 'Web Development',
      year: '2023',
      image: ian,
      description: '',
      tags: ['html', 'css', 'javascript', 'bootstrap'],
      link: '',
    },
    // Add more data objects as needed
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
                <p className="projdesc">{item.description.slice(0, 100)}</p>
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
