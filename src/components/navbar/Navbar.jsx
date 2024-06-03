import React from "react";
// import { NavLink } from 'react-router-dom'
import "./style.scss";
import { FaBookOpen } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";

import logo from "../../assets/image/white_logo_ali.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar__wrapper container">
      <NavLink to={"/"} className="navbar__logo">
        <img className="logo__img" src={logo} alt="" />
      </NavLink>
      <div className="navbar__items">
        <div className="navbar__catalog">
          <div className="navbar__catlog__item">
            <FaBookOpen />
            <h2>Katalog</h2>
          </div>
          <div className="navbar__search">
            <input type="text" placeholder="gtx 1660 super" />
            <button>Найти</button>
          </div>
          <div className="navbar__catlog__item">
            <GiCardboardBoxClosed />

            <h2>Заказы</h2>
          </div>
          <div className="navbar__catlog__item">
            <FaCartShopping />
            <h2>Корзинка</h2>
          </div>
          <NavLink to={"/chart"} className="navbar__catlog__item">
            <RiAdminFill />
            <h2>Войти</h2>
          </NavLink>
        </div>
      </div>

      <NavLink to="/">Cart</NavLink>
    </header>
  );
};

export default Navbar;
