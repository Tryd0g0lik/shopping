// src\frontend\src\components\pages\Header\index.tsx

import React, { JSX } from 'react';
import headerLogo from '@Img/header-logo.png';

export default function HeaderFC(): JSX.Element {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={headerLogo} alt="Bosa Noga" />
            </a>
            <div className="collapse navbar-collapse" id="navbarMain">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/catalog">Каталог</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">О магазине</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contacts">Контакты</a>
                </li>
              </ul>
              <div>
                <div className="header-controls-pics">
                  <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                  { /* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                  <input className="form-control" placeholder="Поиск" />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>

  );
}
