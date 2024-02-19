import React, { JSX } from 'react';
import Banner from '@Img/banner.jpg';

export function MainFC(): JSX.Element {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src={Banner} className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <div className="preloader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
