import React from 'react';
import ian from '../assets/images/ian.jpg';
import '../Styles/PortfolioScreen.css';
import { IoRadioButtonOnOutline } from 'react-icons/io5';

const data = [
  {
    id: 1,
    title: 'Project 1',
    category: 'Mobile App Dev',
    year: '2022',
    image: ian,
    description:
      'Lorem ipsum dolor sit amet tempor incid idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
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
  {
    id: 3,
    title: 'Project 3',
    category: 'Data Science',
    year: '2024',
    image: ian,
    description: '',
    tags: ['python', 'pandas', 'matplotlib', 'numpy'],
    link: '',
  },
  {
    id: 4,
    title: 'Project 4',
    category: 'Data Science',
    year: '2024',
    image: ian,
    description: '',
    tags: ['python', 'pandas', 'matplotlib', 'numpy'],
    link: '',
  },
  {
    id: 5,
    title: 'Project 5',
    category: 'Data Science',
    year: '2024',
    image: ian,
    description: '',
    tags: ['python', 'pandas', 'matplotlib', 'numpy'],
    link: '',
  },
  {
    id: 6,
    title: 'Project 6',
    category: 'Data Science',
    year: '2024',
    image: ian,
    description: '',
    tags: ['python', 'pandas', 'matplotlib', 'numpy'],
    link: '',
  },
];

const Portfolio = () => (
  <div className="portfoliocontainer">
    <div className="projects">
      {data &&
        data.map((item) => (
          <div className="project" key={item.id}>
            <div className="projectimage">
              <img
                className="images"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  borderRadius: '8px',
                }}
                src={item.image}
                alt={item.title}
              />
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
              <p className="projdesc">{item.description.slice(0, 120)}</p>
              <div className="projecttags">
                <ul className="projecttaglist">
                  {item.tags.map((tag, index) => (
                    <li className="taglist" key={index}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="projectlink">
                <a className="viewlink" href={item.link}>
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
);

export default Portfolio;
