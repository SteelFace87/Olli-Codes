import PropTypes from "prop-types";
import React from "react";
import Logo from '../../images/logo.svg';
import MobileLogo from '../../images/logo_mobile.svg';
import { Link } from 'gatsby';
import style from './header.module.css';



const Header = () => (
  <header className={style.header}>
    <div>
      <MobileLogo className={style.mobile_logo}/>
      <Logo className={style.logo}/>
    </div>
      <ul className={style.navOptions}>
        <li><Link to='/blog'>BLOG</Link></li>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/resume'>RESUME</Link></li>
      </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
