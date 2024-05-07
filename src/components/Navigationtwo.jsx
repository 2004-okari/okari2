import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigationtwo = () => {
  const pathName = window.location.pathname;

  return (
    <div
      style={{
        paddingTop: '12px',
      }}
    >
      {pathName === '/portfolio' && (
        <div
          style={{
            margin: '0 auto',
            backgroundColor: '#F0F0F0',
            padding: '6px',
            borderRadius: '12px',
            height: '48px',
            width: '220px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '6px',
              width: '50%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <NavLink
              style={{
                fontWeight: '500',
                fontFamily: 'Poppins',
                textDecoration: 'none',
                fontSize: '20px',
                color: '#191717',
              }}
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '6px',
              width: '50%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <NavLink
              style={{
                fontWeight: '500',
                fontFamily: 'Poppins',
                textDecoration: 'none',
                fontSize: '20px',
                color: '#191717',
              }}
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
      {pathName === '/contact' && (
        <div
          style={{
            margin: '0 auto 12px auto',
            backgroundColor: '#F0F0F0',
            padding: '6px',
            borderRadius: '12px',
            height: '48px',
            width: '220px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '6px',
              width: '50%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <NavLink
              style={{
                fontWeight: '500',
                fontFamily: 'Poppins',
                textDecoration: 'none',
                fontSize: '20px',
                color: '#191717',
              }}
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '6px',
              width: '50%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <NavLink
              style={{
                fontWeight: '500',
                fontFamily: 'Poppins',
                textDecoration: 'none',
                fontSize: '20px',
                color: '#191717',
              }}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigationtwo;
