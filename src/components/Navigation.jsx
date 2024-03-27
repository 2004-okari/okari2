import React from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import '../Styles/NavigationScreen.css';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';

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
          <IoMenuOutline onClick={toggleMenu} className="navigationicon" />
        ) : null}
        <Modal className="modalmenu" open={open}>
          <div>
            <IoMenuOutline onClick={toggleMenu} />
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
        </Modal>
      </div>
    </div>
  );
};
export default Navigation;
