import React from "react";
import { Link } from "react-router-dom";
import logomimiLight from "../../assets/images/logo-mini-light.png";
import logomimiDark from "../../assets/images/logo-mini-dark.png";
import flag from "../../assets/images/flags/pt.svg";
import {
  FaSearch,
  FaSun,
  FaMoon,
  FaBell,
  FaEnvelope,
  FaUser,
  FaEdit,
  FaSignOutAlt,
  FaAmilia,
  FaVoicemail,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo-mini-wrapper">
            <img
              src={logomimiLight}
              className="logo-mini logo-mini-light"
              alt="logo"
            />
            <img
              src={logomimiDark}
              className="logo-mini logo-mini-dark"
              alt="logo"
            />
          </div>

          <form className="search-form">
            <div className="input-group">
              <div className="input-group-text">
                <FaSearch />
              </div>
              <input
                type="text"
                className="form-control"
                id="navbarForm"
                placeholder="Search here..."
              />
            </div>
          </form>

          <ul className="navbar-nav">
            <li className="theme-switcher-wrapper nav-item">
              <input type="checkbox" value="" id="theme-switcher" />
              <label htmlFor="theme-switcher">
                <div className="box">
                  <div className="ball"></div>
                  <div className="icons">
                    <FaSun />
                    <FaMoon />
                  </div>
                </div>
              </label>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex"
                href="#"
                id="languageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={flag} className="w-20px" title="us" alt="flag" />
                <span className="ms-2 d-none d-md-inline-block">English</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="languageDropdown">
                <a href="javascript:;" className="dropdown-item py-2 d-flex">
                  <img
                    src="../../assets/images/flags/de.svg"
                    className="w-20px"
                    title="us"
                    alt="us"
                  />{" "}
                  <span className="ms-2"> English </span>
                </a>
                {/* Add other languages here */}
              </div>
            </li>

            {/* Repeat similar structure for other nav items */}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="ms-2">
                  {" "}
                  <FaEnvelope />
                </span>
                <span className="ms-2">
                  {" "}
                  <FaBell />
                </span>
              </a>
              <div
                className="dropdown-menu p-0"
                aria-labelledby="profileDropdown"
              >
                <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                  <div className="mb-3"></div>
                  <div className="text-center">
                    <p className="fs-16px fw-bolder">Amiah Burton</p>
                    <p className="fs-12px text-secondary">
                      amiahburton@gmail.com
                    </p>
                  </div>
                </div>
                <ul className="list-unstyled p-1">
                  <li className="dropdown-item py-2">
                    <Link to="/profile" className="text-body ms-0">
                      <FaUser className="me-2" />
                      <span>Profile</span>
                    </Link>
                  </li>
                  {/* Add other profile options */}
                </ul>
              </div>
            </li>
          </ul>

          <a href="#" className="sidebar-toggler">
            <FiMenu />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
