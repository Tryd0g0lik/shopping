import React from 'react';
import Banner from '@Img/banner.jpg';
import SandalsMyer from '@Img/products/sandals_myer.jpg';
import SuperheroSneakers from '@Img/products/superhero_sneakers.jpg';
import SandalsKeira from '@Img/products/sandals_keira.jpg';

/**
 * `DMainFC` - it value is:
 *
 * `D` - a 'catalog' is replace on `directory`
 * `F` - `function`
 * `C` - `components`
 * @returns html
 */
export function DMainFC(): JSX.Element {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <img src={Banner} className="img-fluid" alt="К весне готовы!" />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
            <section className="catalog">
              <h2 className="text-center">Каталог</h2>
              <form className="catalog-search-form form-inline">
                <input className="form-control" placeholder="Поиск" />
              </form>
              <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Все</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Женская обувь</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Мужская обувь</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Обувь унисекс</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Детская обувь</a>
                </li>
              </ul>
              <div className="row">
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsMyer}
                      className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos; MYER &apos;</p>
                      <p className="card-text">34 000 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsKeira}
                      className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos; Keira &apos;</p>
                      <p className="card-text">7 600 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SuperheroSneakers}
                      className="card-img-top img-fluid" alt="Супергеройские кеды" />
                    <div className="card-body">
                      <p className="card-text">Супергеройские кеды</p>
                      <p className="card-text">1 400 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsMyer}
                      className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos; MYER &apos;</p>
                      <p className="card-text">34 000 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SandalsKeira}
                      className="card-img-top img-fluid" alt="Босоножки 'Keira'" />
                    <div className="card-body">
                      <p className="card-text">Босоножки &apos;Keira &apos; </p>
                      <p className="card-text">7 600 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="card catalog-item-card">
                    <img src={SuperheroSneakers}
                      className="card-img-top img-fluid" alt="Супергеройские кеды" />
                    <div className="card-body">
                      <p className="card-text">Супергеройские кеды</p>
                      <p className="card-text">1 400 руб.</p>
                      <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-outline-primary">Загрузить ещё</button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
