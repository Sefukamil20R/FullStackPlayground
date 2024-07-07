// Nav.jsx
import React from 'react';
import NavLink from './NavLink';
import LogoImg from "../../CommonResources/images/icons/logo-sm.png";
import SearchImg from "../../CommonResources/images/icons/search-icon-sm.png";
import CartImg from "../../CommonResources/images/icons/cart-sm.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse" onClick={handleToggleCollapse}>
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="/"><img src={LogoImg} alt="Logo" /></Link>

          <div className={`navbar-collapse ${isCollapsed ? 'collapse' : ''}`}>
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <NavLink linkUrl="/mac/" linkName="Mac" />
              <NavLink linkUrl="/iphone/" linkName="iPhone" />
              <NavLink linkUrl="/ipad/" linkName="iPad" />
              <NavLink linkUrl="/watch/" linkName="Watch" />
              <NavLink linkUrl="/tv/" linkName="TV" />
              <NavLink linkUrl="/music/" linkName="Music" />
              <NavLink linkUrl="/support/" linkName="Support" />
              <NavLink linkUrl="/search/" imageSrc={SearchImg} />
              <NavLink linkUrl="/cart/" imageSrc={CartImg} />
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
