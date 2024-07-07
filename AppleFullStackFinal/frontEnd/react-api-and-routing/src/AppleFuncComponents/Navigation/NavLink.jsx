// NavLink.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <Link className="nav-link js-scroll-trigger" to={props.linkUrl} onClick={handleClick}>
        {props.imageSrc ? <img src={props.imageSrc} alt="Icon" /> : props.linkName}
      </Link>
    </li>
  );
};

export default NavLink;
