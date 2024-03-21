import React from 'react';

const data = [
  {
    id: 1,
    title: 'Project 1',
    category: 'Mobile App Dev',
    year: '2022',
    image: '',
    description: '',
    tags: ['react', 'react-router', 'styled', 'components'],
    link: '',
  },
];
const Portfolio = () => {
  return (
    <div>
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>

              <div>
                <h3>{item.title}</h3>
                <div>
                  <ul>
                    <li>{item.category}</li>
                    <li>{item.year}</li>
                  </ul>
                </div>
                <p>{item.description}</p>
                <div>
                  <ul>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <a href={item.link}>View Project</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
