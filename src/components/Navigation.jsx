import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import '../Styles/NavigationScreen.css';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [open, setOpen] = React.useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="navigationcontainer">
      <div className="navigationcontent">
        <p className="navigationtext">Okari ron</p>
        <div className="navigationmenu">
          <ul className="navigationlist">
            <li className="navigationitem">
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="navigationitem">
              <NavLink className="link" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li className="navigationitem">
              <NavLink className="link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        {open === false ? (
          <Menu onClick={toggleMenu} className="navigationicon" />
        ) : null}
        <Modal
          style={{
            backgroundColor: 'rgba(96, 112, 255, 0.7)',
            backdropFilter: 'blur(8px)',
            opacity: '1',
            width: '100%',
            height: '100vh',
            margin: '0 auto',
          }}
          className="modalmenu"
          open={open}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              // justifyContent: 'space-around',
              alignItems: 'flex-start',
              padding: '10px 10px 10px 16px',
            }}
          >
            <IoCloseOutline
              style={{
                alignSelf: 'flex-end',
                color: 'white',
              }}
              size={40}
              onClick={toggleMenu}
              color="#fff"
            />
            <ul
              className="navigationlist"
              style={{
                listStyle: 'none',
                padding: '0',
              }}
            >
              <motion.li
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                whileHover={{ scale: 1.1 }}
                className="navigationitem"
              >
                <NavLink
                  style={{
                    fontSize: '48px',
                    fontWeight: '500',
                    fontFamily: 'Simonetta',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  className="link"
                  to="/"
                >
                  Home
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1 }}
                className="navigationitem"
              >
                <NavLink
                  style={{
                    fontSize: '48px',
                    fontWeight: '500',
                    fontFamily: 'Simonetta',
                    textDecoration: 'none',
                    margin: '120px 0',
                    color: 'white',
                  }}
                  className="link"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
                className="navigationitem"
              >
                <NavLink
                  style={{
                    fontSize: '48px',
                    fontWeight: '500',
                    fontFamily: 'Simonetta ',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  className="link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </motion.li>
            </ul>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Navigation;
