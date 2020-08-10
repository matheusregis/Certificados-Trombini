import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer'
import { Main } from '../../styles/global';

function PageDefault({ children }) {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
    );
}

export default PageDefault;