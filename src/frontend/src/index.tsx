import React, { StrictMode } from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { AppFC } from './App.tsx';
import './css/style.css';
const root = document.querySelector('body');
// debugger;
if ((root !== null) && (root !== undefined)) {
  createRoot(root as HTMLElement).render(
    <StrictMode>
      {/* <BrowserRouter> */}
      <AppFC />
      {/* </BrowserRouter > */}
    </StrictMode>
  );
}
console.log('Good lack work');
