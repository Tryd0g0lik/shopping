// src\frontend\src\components\pages\Home\Main\index.tsx

import React, { JSX, Fragment, useState, useEffect } from 'react';
import Banner from '@img/banner.jpg';
import HeadFC from '@site/Headers.tsx';
import ImageFC from '@site/Img.tsx';
import ImLoader from '@site/ImgLoader.tsx';
import { PositionFC } from '@site/Positions/index.tsx';
import { SFetch } from '@service/server.ts';
import { HandlerPositionVal, FilterCategories } from '@type';
import UseCategoriesFC from '@site/Categories.tsx';
import DivFC from '@site/Div.tsx';
import ButtonFC from '@site/Forms/Button.tsx';
import LoaderMoreFC from '@site/Loadmore';

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';

/* The top-sales from a server request */

// const server
/**
 * `import { UseMainFC } from './Main/index.tsx';`
 */
export function UseMainFC(): JSX.Element {
  /* This datas  is a state for the top-sales */
  const [topsales, useTopsales] = useState<HandlerPositionVal>();
  const [category, useCategory] = useState<HandlerPositionVal>();
  const [positions, usePositions] = useState<HandlerPositionVal>();
  const [filter, useFilter] = useState(1);
  useEffect(() => {
    const serverTopSales = new SFetch(url);
    /* create a request to the server */
    serverTopSales.requestOneBefore = { 'top-sales': true };
    serverTopSales.requestOneParamAsync(useTopsales);
  }, [useTopsales]);
  useEffect(() => {
    const serverCategory = new SFetch(url);
    /* create a request to the server */
    serverCategory.requestOneBefore = { categories: true };
    serverCategory.requestOneParamAsync(useCategory);
  }, [useCategory]);
  useEffect(() => {
    const serverPositions = new SFetch(url);
    /* create a request to the server */
    serverPositions.requestOneBefore = { offset: 3 };
    serverPositions.requestOneParamAsync(usePositions);
  }, [usePositions]);

  /* The filter is below for categories */
  const handlerFilterCaegories = async function (event: MouseEvent): void {
    event.preventDefault();
    const target = (event.target as HTMLAnchorElement);

    if (target.dataset.category !== undefined) {
      useFilter(Number(target.dataset.category));
    }
  };
  const handlerCaegoriesForUseEffect = (): void => {
    const navCategories = Array.from(document.querySelectorAll('.catalog-categories.nav.justify-content-center .nav-item'));

    for (let i = 0; i < navCategories.length; i++) {
      (navCategories[i] as HTMLLIElement).addEventListener('click', handlerFilterCaegories);
    }

  }

  useEffect(handlerCaegoriesForUseEffect, [handlerFilterCaegories]);

  console.warn(`Filter: ${filter}`)
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Fragment>
            <ImageFC path={Banner} classes="img-fluid" context="К весне готовы!" />
            <HeadFC number={2} classes='banner-header' title='К весне готовы!' />
          </Fragment>
          <section className="top-sales">
            <HeadFC number={2} classes='text-center' title='Хиты продаж!' />
            {
              (topsales !== undefined)
                ? (
                  <div className="row">
                    {Array.from(topsales).map((obj) => (
                      <PositionFC key={obj.id} title={obj.title} price={obj.price} >
                        <ImageFC path={
                          ((obj.images !== undefined) &&
                            (obj.images.length > 0))
                            ? obj.images[0]
                            : '#'
                        } classes='card-img-top img-fluid' context={obj.title} />
                      </PositionFC>
                    ))
                    }
                  </div>
                )
                : < ImLoader />
            }
          </section>
          <section className="catalog">
            <HeadFC number={2} classes='text-center' title='Каталог' />
            {
              (category !== undefined)
                ? (
                  <UseCategoriesFC {...category} />
                )
                : (
                  < ImLoader />
                )
            }

            <div className="row">
              {/* This is simply positions */}
              {
                (positions !== undefined)
                  ? (
                    Array.from(positions).map((obj) => (
                      (filter === Number(obj.category))
                        ? (
                          <PositionFC key={obj.id} category={obj.category} title={obj.title} price={obj.price}>
                            <Fragment>
                              <ImageFC path={
                                ((obj.images !== undefined) &&
                                  (obj.images.length > 0))
                                  ? obj.images[0]
                                  : '#'
                              } classes='card-img-top img-fluid' context={obj.title} />
                            </Fragment>
                          </PositionFC>
                        )
                        : (filter === 1)
                          ? (
                            <PositionFC key={obj.id} category={obj.category} title={obj.title} price={obj.price}>
                              <Fragment>
                                <ImageFC path={
                                  ((obj.images !== undefined) &&
                                    (obj.images.length > 0))
                                    ? obj.images[0]
                                    : '#'
                                } classes='card-img-top img-fluid' context={obj.title} />
                              </Fragment>
                            </PositionFC>
                          )
                          : null
                    ))
                  )
                  : < ImLoader />
              }
            </div>
            {/* HEre is a button for will be loaded more the poitions */}
            <LoaderMoreFC />
          </section>
        </div>
      </div>
    </main>
  );
}
