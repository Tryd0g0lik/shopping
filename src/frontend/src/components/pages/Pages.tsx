import React, { JSX } from 'react';
import { Pages } from '@Root';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomepageFC } from './Home/index.tsx';
/* below is a code from loader.html */
import { LoaderpageFC } from './Loader/index.tsx';
/* below is a code from contacts.html */
import { ContactspageFC } from './Contacts/index.tsx';
/* below is a code from catalog.html */
import { CatalogpageFC } from './Catalog/index.tsx';
/* below is a code from catalog.html */
import { CartpageFC } from './Cart/imdex.tsx';
/* below is a code from about.html */
import { AboutpageFC } from './About/index.tsx';
/* below is a code from 404.html */
import { UnderfinedpageFC } from './Undefined/index.tsx';

/**
 * Determine the route
 * @returns
 */
export function PagesFC(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <Routes>
          { /* About page is below */}
          <Route path={Pages.About} element={<AboutpageFC />} />
          { /* Cart page is below */}
          <Route path={Pages.Cart} element={<CartpageFC />} />
          { /* Catalog page is below */}
          <Route path={Pages.Catalog} element={<CatalogpageFC />} />
          { /* Contacts page is below */}
          <Route path={Pages.Contacts} element={<ContactspageFC />} />
          { /* Loader page is below */}
          <Route path={Pages.Loader} element={<LoaderpageFC />} />
          { /* Main page is below */}
          <Route path={Pages.Home} element={<HomepageFC />} />
          <Route path='*' element={<UnderfinedpageFC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
