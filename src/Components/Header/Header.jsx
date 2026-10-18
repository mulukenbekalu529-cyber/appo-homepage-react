import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../../assets/images/icons/logo-sm.png";
import searchIcon from "../../assets/images/icons/search-icon-sm.png";
import cartIcon from "../../assets/images/icons/cart-sm.png";

export default function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>

          {/* Apple Logo */}
          <Link className="navbar-brand mx-auto" to="/">
            <img src={logo} alt="Apple Logo" />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {/* Mac */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/mac">
                  Mac
                </Link>
              </li>

              {/* iPhone */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/iphone">
                  iphone
                </Link>
              </li>

              {/* iPad */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#">
                  ipad
                </Link>
              </li>

              {/* Watch */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#">
                  watch
                </Link>
              </li>

              {/* TV */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#">
                  tv
                </Link>
              </li>

              {/* Music */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#">
                  Music
                </Link>
              </li>

              {/* Support */}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="#">
                  Support
                </Link>
              </li>

              {/* Search */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={searchIcon} alt="Search" />
                </a>
              </li>

              {/* Cart */}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cartIcon} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
