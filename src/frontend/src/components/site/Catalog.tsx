import React, { Fragment, JSX, useEffect, useState } from 'react';
import { PositionFC } from './Positions/index.tsx';
import ImageFC from './Img.tsx';
import ImLoader from './ImgLoader.tsx';
import { PositionsCatalog } from '@reduxs/interfaces.ts';
import store, { RootDispatch, storeDispatch, storeGetstate } from '@reduxs/store.ts';
import { HandlerPositionVal, Position } from '@type';
import { SFetch } from '@service/server.ts';

const REACT_APP_URL = process.env.REACT_APP_URL as string;
const REACT_APP_BPORT = process.env.REACT_APP_BPORT as string;
const url = REACT_APP_URL + ':' + REACT_APP_BPORT + '/api';
let getTotalStore = storeGetstate();
let stateCategory: number | boolean | Position[] = getTotalStore.category.playload;
let stateOldCategory: number = 1;
let stateOldCatalog: number = 0;

let oldOffset: number = 0;
const reduxSetUserCatalog = (props: Position[]): void => {
  try {
    const action: PositionsCatalog = {
      type: 'CATALOG',
      positions: props
    };

    storeDispatch(action) as RootDispatch;
  } catch (er) {
    console.error('[reduxSetUserCatalog] Err: ', (er as Record<any, any>).message);
  }
};
const serverPositions = new SFetch(url);
/* ---------addPositionsForCatalog--- */


export function CatalogFC(): JSX.Element {
  const [filterCategories, useFilter] = useState<number>(1);
  const [positions, usePositions] = useState<HandlerPositionVal>();

  const hablerLoaderMore = (event: MouseEvent): void => {
    event.preventDefault();
    oldOffset += 6;
    serverPositions.requestOneBefore = { offset: oldOffset };
    serverPositions.requestOneParamAsync(usePositions);
  };

  useEffect(() => {
    useFilter(getTotalStore.category.payload);

    /**
     * Here is recived a number of Redux.category.playload.
     * The variable 'stateCategory' update/ It's a number type for the 'useFilter'
     */
    const categorySetInaterval = setInterval(() => {
      getTotalStore = storeGetstate();
      /* --------Category-------- */
      stateCategory = getTotalStore.category.payload;
      if (stateOldCategory < (stateCategory as number) || stateOldCategory > (stateCategory as number)) {
        stateOldCategory = stateCategory as number;
        const copyCategoryArr = [stateCategory].slice();
        useFilter(copyCategoryArr[0] as number);
      }
      /* --------Catalog-------- */

      if (((getTotalStore.catalog.positions).length < stateOldCatalog) ||
        ((getTotalStore.catalog.positions).length > stateOldCatalog)) {
        console.log(`#1 [CatalogFC][hablerLoaderMore][categorySetInaterval]  positions Length:  ${(positions as Position[])?.length},`);
        // reduxSetUserCatalog(getTotalStore.catalog.positions);
        usePositions(getTotalStore.catalog.positions);
        stateOldCatalog = getTotalStore.catalog.positions.length;
      }
    }, 500);

    /* Here is positions of Catalog.
    Create a request to the server | '/items/?offset=6' */
    serverPositions.requestOneBefore = { offset: 6 };
    serverPositions.requestOneParamAsync(usePositions);


    const buttontextCenter = document.querySelector('.catalog .btn-outline-primary');
    if (buttontextCenter !== undefined) {
      (buttontextCenter as HTMLElement).addEventListener('click', hablerLoaderMore);
    }
    return (): void => {
      clearInterval(categorySetInaterval);
      /* object will be removed */
      if ((buttontextCenter !== undefined) && (buttontextCenter !== null)) {
        (buttontextCenter as HTMLElement).removeEventListener('click', hablerLoaderMore);
      }
    };
  }, [usePositions]);

  // if (positions !== undefined) {
  //   reduxSetUserCatalog(positions);
  // }
  console.log('#1 [CatalogFC][hablerLoaderMore]  moreUserPositions it is Array: ', Array.isArray(positions), 'Value: ', positions);
  if (Array.isArray(positions)) {
    console.log('#2 [CatalogFC][hablerLoaderMore]  moreUserPositions it is Array: ', Array.isArray(positions), 'Value: ', positions);
    reduxSetUserCatalog(positions);
  }
  return (
    <div className="row">
      {/* This is simply positions. It is based  at variables: 'filter:number' */}
      {

        (positions !== undefined)
          ? (
            Array.from(positions).map((obj) => (
              /* filterCategories */

              (filterCategories === Number(obj.category))
                ? (/* Here is category after  filtering */
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
                : (filterCategories === 1) //
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
  );
}
